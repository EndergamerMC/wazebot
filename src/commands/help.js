import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Hilfe Command')

export function execute(interaction) {
    console.log('Help Command');

    const helpEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Liste der Commands und Features')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .addFields(
            { name: 'Commands:', value: ' ', },
            { name: '/glossar', value: 'Zeigt eine Liste gängiger Begriffe/Abkürzungen' },
            { name: '/help', value: 'Zeigt diese Liste der Commands an' },
            { name: '/nickname', value: 'Über diesen Command kannst du deinen Nicknamen ändern.' },
            { name: '/profile', value: 'Gibt dir den Link zu einem Editor Profil von dem angegebenen User' },
        )
        .addFields({ name: '\u200b', value: '\u200b' })
        .addFields(
            { name: 'Features:', value: ' ' }
        )
        .addFields(
            { name: 'Hinweis zu gesendeten Ebenen', value: 'Löscht einen PL falls Ebenen darin vorkommen.' },
            { name: 'Rollenauswahl', value: `In <#1070067011905921034> kann man seine Rollen auswählen.` },
            { name: 'Rollenanfrage', value: `In <#1074369269862781028> kann man Rollen anfragen.` },
            { name: 'Willkommensnachricht', value: 'Sendet eine Nachricht, wenn ein User den Server betritt.' },
        )
        .setTimestamp()
        .setFooter({ text: `Angefragt von ${interaction.user.tag}` })

    interaction.reply({
        embeds: [helpEmbed],
    });

}
