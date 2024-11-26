import { SlashCommandBuilder } from "discord.js";

export const global = true;

export const data = new SlashCommandBuilder()
   .setName("feedback")
   .setDescription("Sende ein anonymes Feedback an das Server-Team");

export function execute(interaction) {}
