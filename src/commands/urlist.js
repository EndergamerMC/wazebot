import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import UrSchema from '../schemas/URs-schema.js';
import { CLIENT_RENEG_LIMIT } from 'tls';

export const global = false;

export const data =
    new SlashCommandBuilder()
        .setName('urlist')
        .setDescription('URs anzeigen')

export async function execute(interaction) {
    const userId = interaction.user.id;
    const pageSize = 2;
    let currentPage = 1;

    try {
        const urDokument = await UrSchema.findOne({ userId }).lean();

        if (!urDokument || urDokument.erinnerungen.length === 0) {
            const embed = new EmbedBuilder()
                .setTitle('Deine Erinnerungen')
                .setDescription('Du hast keine Erinnerungen.')
                .setColor('#ff0000');

            await interaction.reply({ embeds: [embed] });
            return;
        }

        const disabledButtonsRow = new ActionRowBuilder();
        const gelöstRow = new ActionRowBuilder();
        const ungelöstRow = new ActionRowBuilder();
        const pageButtonsRow = new ActionRowBuilder();

        const totalPages = Math.ceil(urDokument.erinnerungen.length / pageSize);
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = currentPage * pageSize;
        const erinnerungenSlice = urDokument.erinnerungen.slice(startIndex, endIndex);

        const embed = new EmbedBuilder()
            .setTitle('Deine URs')
            .setColor('#00ff00')
            .setFooter({ text: `Page ${currentPage}/${totalPages}` })

        pageButtonsRow.addComponents(
            new ButtonBuilder()
                .setCustomId('urlist_previous_page')
                .setLabel('Vorherige Seite')
                .setEmoji('⏪')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(currentPage === 1),
            new ButtonBuilder()
                .setCustomId('urlist_next_page')
                .setLabel('Nächste Seite')
                .setEmoji('⏩')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(currentPage === totalPages)
        );

        erinnerungenSlice.forEach((erinnerung, index) => {
            const link = erinnerung.link || 'Link nicht verfügbar';
            const kommentar = erinnerung.kommentar || 'Kein Kommentar';
            const buttonIndex = startIndex + index + 1; // Button-Index basierend auf der angezeigten Seite
            embed.addFields({ name: ' ', value: `${startIndex + index + 1}.  [Link](${link}) - ${kommentar}` });

            disabledButtonsRow.addComponents(
                new ButtonBuilder()
                    .setCustomId(`disabled_${startIndex + index + 1}`)
                    .setLabel(`${startIndex + index + 1}`)
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            );

            gelöstRow.addComponents(
                new ButtonBuilder()
                    .setCustomId(`gelöst_${buttonIndex}`)
                    .setLabel('✅')
                    .setStyle(ButtonStyle.Success)
            );

            ungelöstRow.addComponents(
                new ButtonBuilder()
                    .setCustomId(`ungelöst_${buttonIndex}`)
                    .setLabel('❌')
                    .setStyle(ButtonStyle.Danger)
            );
        });

        await interaction.reply({ embeds: [embed], components: [disabledButtonsRow, gelöstRow, ungelöstRow, pageButtonsRow] });
    } catch (error) {
        console.error('Fehler beim Abrufen der Erinnerungen:', error);
        await interaction.reply('Fehler beim Abrufen der Erinnerungen.');
    }
}