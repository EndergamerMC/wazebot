import {
   ActionRowBuilder,
   ButtonBuilder,
   ButtonStyle,
   EmbedBuilder,
   Events,
   InteractionType,
} from "discord.js";
import { config } from "../config.js";

export const name = Events.InteractionCreate;

export async function execute(interaction) {
   if (interaction.type === InteractionType.ModalSubmit) {
      if (interaction.customId === "feedbackModal") {
         console.log("Feedback Modal Submit");

         const antwortFeld1 =
            interaction.fields.getTextInputValue("feedbackTitel");
         const antwortFeld2 = interaction.fields.getTextInputValue(
            "feedbackBeschreibung"
         );

         const serverId = interaction.guild.id;

         const feedbackChannel = config[serverId].channels.feedback_channel;

         const channel = interaction.client.channels.cache.get(feedbackChannel);

         const threadCount = channel.threads.cache.size;
         const number = threadCount + 1;

         const embed = new EmbedBuilder()
            .addFields({
               name: `${antwortFeld1}`,
               value: `${antwortFeld2}`,
               inline: false,
            })
            .setColor("#bbff00")
            .setTimestamp();

         console.log({ antwortFeld1, antwortFeld2 });

         channel.threads.create({
            name: `Feedback #${number} - ${antwortFeld1}`,
            message: { embeds: [embed] },
         });

         let part1;
         let part2;
         let part3;

         if (interaction.locale === "de") {
            part1 = `Erfolgreich empfangen! Danke für deine Nachricht!`;
            part2 = `Übermittelter Titel: ${antwortFeld1}`;
            part3 = `Übermittelte Beschreibung: ${antwortFeld2}`;
         } else if (interaction.locale === "fr") {
            part1 = `Reçu avec succès ! Merci pour votre message !`;
            part2 = `Titre soumis : ${antwortFeld1}`;
            part3 = `Description soumise : ${antwortFeld2}`;
         } else if (interaction.locale === "it") {
            part1 = `Ricevuto con successo! Grazie per il tuo messaggio!`;
            part2 = `Titolo inviato: ${antwortFeld1}`;
            part3 = `Descrizione inviata: ${antwortFeld2}`;
         } else {
            part1 = `Successfully received! Thank you for your message!`;
            part2 = `**Submitted title:** ${antwortFeld1}`;
            part3 = `**Submitted description:** ${antwortFeld2}`;
         }

         await interaction.reply({
            content: `${part1}\n${part2}\n${part3}`,
            ephemeral: true,
         });
      }
   }
}
