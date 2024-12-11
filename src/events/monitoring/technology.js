// Importation des modules nécessaire
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const RSSParser = require('rss-parser');
const monitoringSign = require("../../utils/monitoring/monitoringSign")

// Importation du fichier config
const config = require('../../../src/config.json');


/**
 * 
 * Événement qui permet d'envoyer un embed chaque jour à 8h avec une
 * actualité sur l'informatique grâce au flux RSS.
 * 
 */
module.exports = (client) => {

    client.once('ready', () => {
        // toutes les 5 secondes /!\ à changer avec cron shedule ! /!\
        setInterval( async () => { 
            // Récupére le flux RSS 
            const parser = new RSSParser();
            const news = await parser.parseURL(config.monitoring.RSS.technology);
            
            // Génére le panneaux de l'actualité
            const buffer = await monitoringSign(news.items[0].title);
            const attachment = new AttachmentBuilder(buffer, { name: 'sign_technology.png' });
            
            // Création de l'embed 
            const monitoringEmbed = new EmbedBuilder()
                .setColor("White")
                .setImage("attachment://sign_technology.png")
                .setDescription(`[Clique ici pour lire](${news.items[0].link})`)

            // Envoie l'embed dans un channel spécifique
            const channel = client.channels.cache.get(config.monitoring.channel.technology);
            channel.send({embeds: [monitoringEmbed], files: [attachment] });

        }, 5000);
    });

};