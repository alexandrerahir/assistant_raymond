// Importation des modules nécessaires
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les boutons.
 *
 */
module.exports = async (client) => {

    fs.readdirSync('./src/interactions/buttons/').forEach(dir => {
        const files = fs.readdirSync(`./src/interactions/buttons/${dir}/`).filter(file => file.endsWith('.js'));
    
        for(const file of files) {
            const button = require(`../interactions/buttons/${dir}/${file}`);
            client.buttons.set(button.id, button)
        }
    });

};