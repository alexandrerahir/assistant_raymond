/**
 * 
 * Evenement qui permet de charger les commandes
 * et affiche un message lorsque le client est en 
 * ligne.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        // Affiche dans la console quand le client est en ligne
        console.log(`${client.user.tag} est en ligne !`);

        // Chargement des commandes
        require('../../handlers/commandsHandler')(client);
    });

};