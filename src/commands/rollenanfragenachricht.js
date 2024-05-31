import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('rollenanfragebutton')
        .setDescription('Rollen Anfrage Button senden')

export function execute(interaction) {
    console.log('RollenAnfrageButtonSenden Command');

    const rollenAnfrageEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Rollen Anfrage')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription(`Frage hier eine Rolle an`)
        .addFields(
            { name: ' ', value: `Klicke auf den Button unten, um eine Rolle anzufragen.` }
        )

    const rollenAnfrageButton = new ActionRowBuilder().setComponents(
        new ButtonBuilder()
            .setCustomId('rollenAnfrage')
            .setStyle(ButtonStyle.Primary)
            .setLabel('Rollen anfragen')
    )

    interaction.channel.send({
        embeds: [rollenAnfrageEmbed],
        components: [rollenAnfrageButton],
    });
}