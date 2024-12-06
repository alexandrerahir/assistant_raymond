/**
 * 
 * Fonction qui permet de gérer les interactions des modals.
 *
 */
module.exports = (client) => {

    client.on('interactionCreate', async interaction => {
        // Vérifie que l'interaction est un modal
        if (!interaction.isModalSubmit()) return;
    
        const modal = client.modals.get(interaction.customId);

        // Vérifie si le modal existe
        if (!modal) return;
    
        try {
            // Exécution du modal
            await modal.run(client, interaction);
        } catch (error) {
            console.log(error);
        }
    });

};