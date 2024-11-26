import { SlashCommandBuilder } from "discord.js";
import { config } from "../config.js";

export const global = false;

export const data = new SlashCommandBuilder()
   .setName("test")
   .setDescription("test");

export async function execute(interaction) {
   const channel = interaction.client.channels.cache.get("1167456287513120860");

   const message = await channel.messages
      .fetch("1195117219751919728")
      .then((message) => {
         let embed = message.embeds[0];
         return embed;
      });

   const sendChannel = interaction.client.channels.cache.get(
      "1126215163582890075"
   );

   sendChannel.send({
      embeds: [message],
   });
}
