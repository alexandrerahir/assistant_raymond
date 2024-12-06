/**
 * 
 * Fonction qui permet de gérer les interactions des commandes.
 *
 */
module.exports = (client) => {

    client.on('interactionCreate', async (interaction) => {
        // Vérifie que l'interaction est une commande
        if (!interaction.isCommand()) return;
    
        const command = client.commands.get(interaction.commandName);

        // Vérifie si la commande existe
        if (!command) return;
    
        try {
            // Exécution de la commande
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
        }
    });

};