import {
    Client,
    Collection,
    GatewayIntentBits,
    Options,
    REST
} from 'discord.js';
import { config } from "dotenv";
// import UserProfileCommand from "./commands/userprofil.js";
// import GlossarCommand from "./commands/glossar.js";
// import RollenNachrichtCommand from "./commands/rollennachricht.js";
// import BundeslandNachricht from "./commands/bundeslandnachricht.js";
// import NicknameCommand from "./commands/nickname.js";
// import HelpCommand from "./commands/help.js";
// import RollenAnfrageButton from "./commands/rollenanfragenachricht.js";
import fs from "node:fs";
import path from "node:path";

import mongoose from "mongoose";
import messageCountSchema from "./schemas/message-count-schema.js";

config();


const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const MONGO_URI = process.env.MONGO_URI;




const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
    ],
    sweepers: {
        ...Options.DefaultSweeperSettings,
        messages: {
            interval: 3600,
            lifetime: 1800
        },
        users: {
            interval: 3600,
            filter: () => user => user.id !== client.user.id,
        },
        guildMembers: {
            interval: 3600,
            filter: () => user => user.id !== client.user.id,
        }
    }
});

client.on('ready', () => {
    try {
        mongoose.connect(MONGO_URI, {
            keepAlive: true,
        })
    } catch (error) {
        console.error(error);
    }
})

mongoose.connection.on('connected', () => {
    console.log('Erfolgreich mit der Datenbank verbunden.');
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.guild.id != '805758643114737676') return;

    await messageCountSchema.findOneAndUpdate({
        _id: message.author.id
    }, {
        _id: message.author.id,
        $inc: {
            messageCount: 1,
        }
    }, {
        upsert: true
    })
});

client.commands = new Collection();

const commandsPath = path.join('./src', 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    let command = await import(`./commands/${file}`);

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNUNG] Dem Command bei ${filePath} fehlt eine erforderliche "data" oder "execute" Eigenschaft.`);
    }
}

const eventsPath = path.join('./src', 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    let event = await import(`./events/${file}`);

    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

const rest = new REST({ version: '10' }).setToken(TOKEN);


async function main() {
    try {
        client.login(TOKEN);
    } catch (err) {
        console.log(err);
    }
}

main();
