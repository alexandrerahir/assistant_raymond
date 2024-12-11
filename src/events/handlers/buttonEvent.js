/**
 * 
 * Événement qui permet de gérer les interactions des boutons.
 *
 */
module.exports = (client) => {

    client.on('interactionCreate', async interaction => {
        // Vérifie que l'interaction est un bouton
        if (!interaction.isButton()) return;

        const button = client.buttons.get(interaction.customId);

        // Vérifie si le bouton existe
        if (!button) return;

        try {
            // Exécution du bouton
            await button.run(client, interaction);
        } catch (error) {
            console.log(error);
        }
    });

};