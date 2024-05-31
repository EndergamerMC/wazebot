import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events } from 'discord.js';
import UrSchema from '../schemas/URs-schema.js';



export const name = Events.InteractionCreate;

export async function execute(interaction) {
    if (!interaction.isButton()) return;

    if (interaction.customId.startsWith('gelöst_')) {

    } else if (interaction.customId.startsWith('ungelöst_')) {

    }
}

