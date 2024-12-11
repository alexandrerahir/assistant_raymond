/**
 * 
 * Événement qui permet de gérer les interactions des commandes.
 *
 */
module.exports = (client) => {

    client.on('interactionCreate', async interaction => {
        // Vérifie que l'interaction est un selectmenu
        if (!interaction.isStringSelectMenu()) return;
    
        const selectmenu = client.selectmenus.get(interaction.customId);

        // Vérifie si le selectmenu existe
        if (!selectmenu) return;
    
        try {
            // Exécution du selectmenu
            await selectmenu.run(client, interaction);
        } catch (error) {
            console.log(error);
        }
    });

};