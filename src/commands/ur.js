import { SlashCommandBuilder } from 'discord.js';
import Erinnerung from '../schemas/URs-schema.js';

const linkRegex = /^(http|https):\/\/[^ "]+$/;

export const global = false;

export const data =
    new SlashCommandBuilder()
        .setName('ur')
        .setDescription('UR hinzufügen')
        .addStringOption((option) =>
            option
                .setName('link')
                .setDescription('Der Link zum UR')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('kommentar')
                .setDescription('Kommentar zur Erinnerung')
                .setRequired(true)
        )


export async function execute(interaction) {
    const userId = interaction.user.id;
    const link = interaction.options.getString('link');
    const kommentar = interaction.options.getString('kommentar');

    if (!linkRegex.test(link)) {
        await interaction.reply('Ungültiger Link.');
        return;
    }

    const neueErinnerung = {
        link: link,
        kommentar: kommentar,
    };

    Erinnerung.findOneAndUpdate(
        { userId },
        { $push: { erinnerungen: neueErinnerung } },
        { upsert: true, new: true }
    )
        .then(updatedErinnerung => {
            if (updatedErinnerung) {
                console.log('Erinnerung hinzugefügt:', updatedErinnerung);
            } else {
                console.log('Fehler beim Hinzufügen der Erinnerung');
            }
        })
        .catch(error => {
            console.error('Fehler beim Hinzufügen der Erinnerung:', error);
        });

    interaction.reply({
        content: `Ich habe folgende Erinnerung erfolgreich erstellt: test`
    });
}