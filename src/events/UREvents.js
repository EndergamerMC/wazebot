import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } from 'discord.js';
import UrSchema from '../schemas/URs-schema.js';

export const name = Events.InteractionCreate;

async function updateEmbed(interaction, editedEmbed, disabledButtonsRow, gelöstRow, ungelöstRow, pageButtonsRow) {
    await interaction.update({
        embeds: [editedEmbed],
        components: [disabledButtonsRow, gelöstRow, ungelöstRow, pageButtonsRow]
    });
}

export async function execute(interaction) {
    if (!interaction.isButton()) return;
    if (
        interaction.customId === 'urlist_previous_page' ||
        interaction.customId === 'urlist_next_page' ||
        interaction.customId.startsWith('gelöst_') ||
        interaction.customId.startsWith('ungelöst_')
    ) {
        if (interaction.user.id !== interaction.message.interaction.user.id) {
            await interaction.reply({
                content: 'Finger weg von fremden UR-Listen!'
            });
            return;
        }

        const userId = interaction.user.id;
        const urDokument = await UrSchema.findOne({ userId }).lean();
        if (!urDokument) {
            return;
        }

        if (!urDokument.gelösteErinnerungen) {
            urDokument.gelösteErinnerungen = [];
        }

        if (!urDokument.ungelösteErinnerungen) {
            urDokument.ungelösteErinnerungen = [];
        }

        if (interaction.customId.startsWith('gelöst_')) {
            let erinnerungenSlice2 = urDokument.erinnerungen
            console.log('gelöst button clicked');
            console.log(interaction.customId);
            const index = parseInt(interaction.customId.split('_')[1]) - 1;
            console.log(index);
            const erinnerung = erinnerungenSlice2[index];
            console.log(erinnerung);

            urDokument.gelösteErinnerungen.push(erinnerung);
            console.log('pushed ' + erinnerung);

            urDokument.erinnerungen.splice(index, 1);
        }

        if (interaction.customId.startsWith('ungelöst_')) {
            let erinnerungenSlice3 = urDokument.erinnerungen
            console.log('ungelöst button clicked');
            console.log(interaction.customId);
            const index = parseInt(interaction.customId.split('_')[1]) - 1;
            const erinnerung = erinnerungenSlice3[index];

            urDokument.ungelösteErinnerungen.push(erinnerung);

            urDokument.erinnerungen.splice(index, 1);
        }

        await UrSchema.findOneAndUpdate({ userId }, urDokument);

        const string = interaction.message.embeds[0].footer.text;
        const pageSize = 2;
        const parts = string.split(' ');
        const pageParts = parts[1].split('/');
        let currentPage = parseInt(pageParts[0]);
        const totalPages = parseInt(pageParts[1]);

        if (interaction.customId === 'urlist_previous_page') {
            if (currentPage > 1) {
                currentPage -= 1;
                console.log('false');
            }
        } else if (interaction.customId === 'urlist_next_page') {
            if (currentPage < totalPages) {
                currentPage += 1;
                console.log('true');
            }
        }
        console.log(currentPage);

        const startIndex = (currentPage - 1) * pageSize;
        console.log(currentPage)
        console.log(startIndex);
        const endIndex = startIndex + pageSize;
        console.log(endIndex);

        let erinnerungenSlice = [];

        if (urDokument.erinnerungen.length > 0) {
            erinnerungenSlice = urDokument.erinnerungen.slice(startIndex, endIndex);
            console.log(erinnerungenSlice);
        }

        if (erinnerungenSlice.length === 0 && currentPage > 1) {
            currentPage -= 1;
            const newStartIndex = (currentPage - 1) * pageSize;
            const newEndIndex = newStartIndex + pageSize;
            erinnerungenSlice = urDokument.erinnerungen.slice(newStartIndex, newEndIndex);
        }

        const updatedTotalPages = Math.ceil(urDokument.erinnerungen.length / pageSize);

        if (currentPage > updatedTotalPages && updatedTotalPages > 0) {
            currentPage = updatedTotalPages;
            const newStartIndex = (currentPage - 1) * pageSize;
            const newEndIndex = newStartIndex + pageSize;
            erinnerungenSlice = urDokument.erinnerungen.slice(newStartIndex, newEndIndex);
        }

        console.log('currentPage:' + currentPage);
        console.log('totalPages:' + updatedTotalPages);

        const receivedEmbed = interaction.message.embeds[0];
        const editedEmbed = EmbedBuilder.from(receivedEmbed);

        const newFields = [];

        const newFooter = `Page ${currentPage}/${updatedTotalPages}`;

        const disabledButtonsRow = new ActionRowBuilder();
        const gelöstRow = new ActionRowBuilder();
        const ungelöstRow = new ActionRowBuilder();
        const pageButtonsRow = new ActionRowBuilder();

        if (erinnerungenSlice.length > 0) {
            erinnerungenSlice.forEach((erinnerung, index) => {
                const link = erinnerung.link || 'Link nicht verfügbar';
                const kommentar = erinnerung.kommentar || 'Kein Kommentar';
                const buttonIndex = startIndex + index + 1;
                console.log('buttonIndex: ' + buttonIndex);

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

                newFields.push({ name: ' ', value: `${startIndex + index + 1}.  [Link](${link}) - ${kommentar}` });
            });
        } else {
            newFields.push({ name: ' ', value: 'Keine Erinnerungen gefunden.' });
        }

        editedEmbed.setFields(newFields).setFooter({ text: newFooter });

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
                .setDisabled(currentPage === updatedTotalPages)
        );



        await updateEmbed(interaction, editedEmbed, disabledButtonsRow, gelöstRow, ungelöstRow, pageButtonsRow);


    }
}
