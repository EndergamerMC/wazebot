import { SlashCommandBuilder } from 'discord.js';
import { tags } from '../tags.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('tag')
        .setDescription('tag')


export async function execute(interaction) {
    if (interaction.member.id === '572402980347838474') {
        const tag = tags[1];
        interaction.reply(tag)
    } else {
        interaction.reply('Momentan bist du nicht dazu berechtigt, diesen Command auszuführen. Für Hilfe schreibe bitte <@572402980347838474> eine Nachricht.')
    }
}