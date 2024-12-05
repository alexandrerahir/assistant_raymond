// Importation des modules nécessaire
const fs = require('fs');


/**
 * 
 * Fonction qui permet de charger les événements.
 *
 */
module.exports = (client) => {

    // Parcourt tous les sous-dossiers dans le répertoire
    fs.readdirSync('./src/events/').forEach(dir => {

        // Récupère les fichiers JavaScript
        const files = fs.readdirSync(`./src/events/${dir}/`).filter(file => file.endsWith('.js'));
        
        // Parcourt chaque fichier JavaScript
        for (const file of files) {

            // Appelle la fonction exportée
            const event = require(`../events/${dir}/${file}`);
            event(client);

        }

    });

};