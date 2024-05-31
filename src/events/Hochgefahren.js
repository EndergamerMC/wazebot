import { Events } from 'discord.js';
import { config } from "dotenv";

config();

const devLogChannel = process.env.DEV_SERVER_LOG_CHANNEL_ID;

export const name = Events.ClientReady

export function execute(client) {
    console.log(`${client.user.tag} ist jetzt eingeloggt.`);
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const tag = now.getDate();
    const monat = now.getMonth() + 1;
    const jahr = now.getFullYear();

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMonat = monat < 10 ? `0${monat}` : monat;
    const formattedTag = tag < 10 ? `0${tag}` : tag;

    const datum = formattedTag + '.' + formattedMonat + '.' + jahr;
    const uhrzeit = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' Uhr'

    const zeit = datum + ' um ' + uhrzeit;

    const logChannel = client.channels.cache.get(devLogChannel);

    try {
        // logChannel.send({
        //     content: '`' + zeit + '`: ' + `**Hochgefahren!**`
        // });
    } catch (error) {
        console.error(error);
    }
}