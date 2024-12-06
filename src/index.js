// Importation de la bibliothéque discord.js
const { Client, GatewayIntentBits, Collection } = require('discord.js');

// Initialiser les variables d'environnement
require('dotenv').config();

// Création de l'instance client avec tout les intents
const client = new Client({ intents: Object.values(GatewayIntentBits) });

// Collection des handlers
client.commands = new Collection();
client.buttons = new Collection();

// Importation des handlers
require('./handlers/eventsHandler')(client);

// Connexion du client à discord
client.login(process.env.CLIENT_TOKEN);