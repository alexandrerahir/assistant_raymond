/**
 * 
 * Événement qui permet de charger les commandes,boutons,select menus et modals
 * et affiche un message lorsque le client est en ligne.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        // Chargement des commandes,boutons et select menus
        require('../../handlers/commandsHandler')(client);
        require('../../handlers/buttonsHandler')(client);
        require('../../handlers/selectmenusHandler')(client);
        require('../../handlers/modalsHandler')(client);

        // Affiche dans la console quand le client est en ligne
        console.log(`${client.user.tag} est en ligne !`);
    });

};