// Importation des modules nécessaire
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les événements.
 *
 */
module.exports = (client) => {

    fs.readdirSync('./src/events/').forEach(dir => {

        const files = fs.readdirSync(`./src/events/${dir}/`).filter(file => file.endsWith('.js'));
        
        for (const file of files) {
            const event = require(`../events/${dir}/${file}`);
            event(client);
        }

    });
    
};