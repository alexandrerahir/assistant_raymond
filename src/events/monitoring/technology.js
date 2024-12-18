// Importation des modules nécessaire
const monitoringDispatcher = require("../../utils/monitoring/monitoringDispatcher");

// Importation du fichier config
const config = require('../../../src/config.json');


/**
 * 
 * Événement qui permet d'envoyer un embed chaque jour à 8h00 avec une
 * actualité sur l'informatique grâce au flux RSS.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        // toutes les 5 secondes à changer avec cron shedule !
        setInterval( async () => { 

            // Appel à la fonction pour envoyer l'actualité
            monitoringDispatcher(client, config.monitoring.RSS.technology, "./src/assets/images/monitoring/sign_technology.png", config.monitoring.channel.technology);

        }, 5000);
    });

};