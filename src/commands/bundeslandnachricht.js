import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('bundeslandnachricht')
        .setDescription('Bundesland Nachricht senden')

export function execute(interaction) {
    console.log('Bundeslandnachricht Command');

    const bundeslandEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Bundesland')
        .setDescription('Wähle dein Bundesland durch Klicken eines Buttons aus')

    const channel = interaction.client.channels.cache.get('1126215163582890075');

    channel.send({
        embeds: [bundeslandEmbed],
        components: [
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('baden_württemberg')
                    .setLabel('Baden-Württemberg')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bayern')
                    .setLabel('Bayern')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('berlin')
                    .setLabel('Berlin')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('brandenburg')
                    .setLabel('Brandenburg')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bremen')
                    .setLabel('Bremen')
                    .setStyle(ButtonStyle.Primary)
            ),
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('mecklenburg_vorpommern')
                    .setLabel('Mecklenburg-Vorpommern')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hamburg')
                    .setLabel('Hamburg')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hessen')
                    .setLabel('Hessen')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('niedersachsen')
                    .setLabel('Niedersachsen')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('nordrhein_westfalen')
                    .setLabel('Nordrhein-Westfalen')
                    .setStyle(ButtonStyle.Primary)
            ),
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('rheinland_pfalz')
                    .setLabel('Rheinland-Pfalz')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('saarland')
                    .setLabel('Saarland')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sachsen')
                    .setLabel('Sachsen')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sachsen_anhalt')
                    .setLabel('Sachsen-Anhalt')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('schleswig_holstein')
                    .setLabel('Schleswig-Holstein')
                    .setStyle(ButtonStyle.Primary)
            ),
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('thueringen')
                    .setLabel('Thüringen')
                    .setStyle(ButtonStyle.Primary)
            )
        ]
    });
    interaction.reply({
        content: 'Erfolgreich gesendet!'
    })
}