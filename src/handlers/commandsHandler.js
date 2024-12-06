// Importation des modules nécessaires
const { REST, Routes } = require('discord.js');
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les commandes.
 *
 */
module.exports = async (client) => {

    const commands = [];
    const commandFolders = fs.readdirSync('./src/commands');

    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`);
            client.commands.set(command.data.name, command);
            commands.push(command.data.toJSON());
        }
    }
    
    const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

    await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: commands }
    );

};