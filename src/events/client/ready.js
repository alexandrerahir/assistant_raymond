/**
 * 
 * Evenement qui permet de charger les commandes et boutons
 * et affiche un message lorsque le client est en 
 * ligne.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        // Affiche dans la console quand le client est en ligne
        console.log(`${client.user.tag} est en ligne !`);

        // Chargement des commandes et boutons
        require('../../handlers/commandsHandler')(client);
        require('../../handlers/buttonsHandler')(client);
    });

};