/**
 * 
 * Evenement qui permet d'afficher un message dans la
 * console pour signaler que le client est en ligne.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        console.log(`${client.user.tag} est en ligne !`);
    });

};