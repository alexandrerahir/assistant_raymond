// Importation des modules nécessaires
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les select menus.
 *
 */
module.exports = async (client) => {

    fs.readdirSync('./src/interactions/selectmenus/').forEach(dir => {
        const files = fs.readdirSync(`./src/interactions/selectmenus/${dir}/`).filter(file => file.endsWith('.js'));
    
        for(const file of files) {
            const selectmenu = require(`../interactions/selectmenus/${dir}/${file}`);
            client.selectmenus.set(selectmenu.id, selectmenu)
        }
    });

};