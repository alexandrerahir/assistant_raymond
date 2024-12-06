// Importation des modules nécessaires
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les modals.
 *
 */
module.exports = async (client) => {

    fs.readdirSync('./src/interactions/modals/').forEach(dir => {
        const files = fs.readdirSync(`./src/interactions/modals/${dir}/`).filter(file => file.endsWith('.js'));
    
        for(const file of files) {
            const modal = require(`../interactions/modals/${dir}/${file}`);
            client.modals.set(modal.id, modal)
        }
    });

};