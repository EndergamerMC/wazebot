import { EmbedBuilder, Events } from 'discord.js';
import { config } from '../config.js';

export const name = Events.GuildMemberAdd

export async function execute(member) {
    console.log(`${member.user.tag} has joined the server!`);

    const serverId = member.guild.id;
    console.log(serverId);

    const welcomeChannel = config[serverId].channels.welcome_channel;
    console.log(welcomeChannel);

    const channel = member.client.channels.cache.get(welcomeChannel);

    const welcomeEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Willkommensnachricht')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .addFields(
            { name: ' ', value: `**Hey ${member}, herzlich willkommen** im Waze DACH **Discord Server!**` },
            { name: ' ', value: `Hey ${member}, welcome to the **Waze DACH** Discord Server!` },
            { name: ' ', value: `Bonjour ${member}, bienvenue sur le serveur Discord **Waze DACH!**` },
        )
        .addFields({ name: '\u200b', value: '\u200b' })
        .addFields(
            { name: ' ', value: `__**Schreib gerne kurz, wie dein Editorname lautet und wo du herkommst.**__` },
            { name: ' ', value: `Please let us know what your editor name is and where you are from.` },
            { name: ' ', value: `N'hésite pas à écrire ton nom d'éditeur et ton lieu d'origine.` },
        )
        .setTimestamp();


    try {
        channel.send({
            embeds: [welcomeEmbed]
        });
    } catch (error) {
        console.error(error);
    }
}