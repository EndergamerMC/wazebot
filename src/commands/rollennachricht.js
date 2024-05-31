import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('rollennachricht')
        .setDescription('Rollen Nachricht senden')

export function execute(interaction) {
    console.log('Rollennachricht Command');

    const farbenEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Farben')
        .setDescription('Wähle deine Farben durch Klicken eines Buttons aus')

    const channel = interaction.client.channels.cache.get('1126215163582890075');
    channel.send({
        embeds: [farbenEmbed],
        components: [
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('blue')
                    .setLabel('Blue')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('red')
                    .setLabel('Red')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('green')
                    .setLabel('Green')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pink')
                    .setLabel('Pink')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('purple')
                    .setLabel('Purple')
                    .setStyle(ButtonStyle.Primary)
            ),
        ],
    });
}