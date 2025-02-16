const fetch = require('node-fetch');
const { cmd, commands } = require('../command');

cmd({
    pattern: 'weather',
    alias: 'météo',
    react: '🌤️',
    desc: 'Obtenir la météo d\'une ville',
    category: 'information',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, pushname }) => {
    try {
        // On récupère le nom de la ville de l'argument
        const city = args.join(" ");
        if (!city) {
            return reply("Veuillez fournir le nom d'une ville !");
        }

        // Appel à l'API de météo (exemple avec OpenWeatherMap)
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';  // Remplace avec ta clé API
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=city   appid={apiKey}&units=metric&lang=fr`;
const response = await fetch(apiUrl);
        const data = await response.json();

        // Si la ville n'est pas trouvée
        if (data.cod !== 200) {
            return reply("Désolé, je n'ai pas pu trouver cette ville !");
        }

        // Informations météo
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Formatage du message à envoyer
        const weatherMessage = `*Météo de city:*` +
            `Température:{temp}°C\n` +
            `Condition: weather` +
            `Humidité:{humidity}%\n` +
            `Vitesse du vent: ${windSpeed} m/s`;

        // Envoie du message à l'utilisateur
        await conn.sendMessage(from, { text: weatherMessage }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Une erreur est survenue lors de la récupération des données météo.");
    }
});
