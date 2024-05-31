import { SlashCommandBuilder } from "discord.js";
import messageCountSchema from "../schemas/message-count-schema.js";

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Deine Statistiken')


export async function execute(interaction) {
    const userMessages = await messageCountSchema.findById(interaction.member.id);
    console.log(userMessages.messageCount);
    const messageCount = userMessages.messageCount;

    interaction.reply(`Du hast bisher ${messageCount} Nachrichten gesendet.`)
}