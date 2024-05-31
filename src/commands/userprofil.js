import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Sendet einen Link zum Waze Profil.')
        .addStringOption((option) =>
            option
                .setName('benutzername')
                .setDescription('Der Benutzername')
                .setRequired(true)
        )

export function execute(interaction) {
    console.log('Profil Command');

    const profileEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Waze Profil angefragt')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription(`**Waze Profil von ${interaction.options.getString('benutzername')}**`)
        .addFields(
            { name: ' ', value: `Klicke auf den Button unten, um zu dem Waze Profil von **${interaction.options.getString('benutzername')}** geleitet zu werden.` }
        )
        .setTimestamp()

    interaction.reply({
        embeds: [profileEmbed],
        components: [
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setLabel(`Waze Profil von ${interaction.options.getString('benutzername')}`)
                    .setStyle(ButtonStyle.Link)
                    .setURL(`https://www.waze.com/de/user/editor/${interaction.options.getString('benutzername')}`)
            )
        ]
    })
}