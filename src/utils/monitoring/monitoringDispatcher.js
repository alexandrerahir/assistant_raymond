// Importation des modules nécessaire
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const RSSParser = require('rss-parser');
const monitoringSign = require("./monitoringSign")


/**
 * 
 * Fonction qui permet de récupérer une actualité depuis un flux RSS
 * et de l'envoyer dans le channel spécifique sous forme d'embed.
 * 
 */
module.exports = async function monitoringDispatcher(client, link, image, channel) {

    // Récupére la derniere actualité avec le flux RSS 
    const parser = new RSSParser();
    const news =  await parser.parseURL(link);

    // Génére le panneaux de l'actualité
    const buffer = await monitoringSign(image, news.items[0].title);
    const attachment = new AttachmentBuilder(buffer, { name: 'sign.png' });

    // Création de l'embed 
    const monitoringEmbed = new EmbedBuilder()
        .setColor("White")
        .setImage("attachment://sign.png")
        .setDescription(`[Clique ici pour lire](${news.items[0].link})`);
    
    // Envoie l'embed dans le channel spécifique
    await client.channels.cache.get(channel).send({embeds: [monitoringEmbed], files: [attachment] })
    
};