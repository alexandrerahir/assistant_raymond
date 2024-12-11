// Importation des modules nécessaire
const { createCanvas, loadImage } = require('canvas');

/**
 * 
 * Fonction qui permet de créer une image personnalisée 
 * pour les panneaux d'actualités.
 * 
 */
module.exports = async function monitoringSign(image, title) {

    // Couper la phrase pour le canvas
    if (title.length > 65) {
        title = title.slice(0, 65) + '...';
    }

    // Création du canvas
    const canvas = createCanvas(1920, 600);
    const ctx = canvas.getContext('2d');

    // Ajout du background
    const backgroundSign = await loadImage(image); 
    ctx.drawImage(backgroundSign, 0, 0, canvas.width, canvas.height);

    // Ajout du titre
    ctx.font = "48px Arial"; // Font à changer avec DMsans
    ctx.fillStyle = "#262626";
    ctx.fillText(title, 194, 365);

    // Retourner le buffer du canvas crée
    return canvas.toBuffer();

};