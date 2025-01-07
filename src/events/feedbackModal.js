import { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export const name = Events.InteractionCreate;

export async function execute(interaction) {
   if (!interaction.isChatInputCommand()) return;

   if (interaction.commandName === "feedback") {
      let title;
      let beschreibung;
      let placeholderTitle;
      let placeholderBeschreibung;

      if (interaction.locale === "de") {
         title = "Titel";
         beschreibung = "Beschreibung";
         placeholderTitle = "Gib einen Titel für dein Feedback ein";
         placeholderBeschreibung =
            "Erzähl uns mehr! Alles wird anonym übermittelt! Keine Rückantwort möglich, daher sollte die Beschreibung möglichst detailliert und aussagekräftig sein.";
      } else if (interaction.locale === "fr") {
         title = "Titre";
         beschreibung = "Description";
         placeholderTitle = "Entrez un titre pour vos commentaires";
         placeholderBeschreibung =
            "Dites-nous-en plus ! Tout est soumis de manière anonyme ! Aucune réponse n'est possible, la description doit donc être aussi détaillée et significative que possible.";
      } else if (interaction.locale === "it") {
         title = "Titulo";
         beschreibung = "Descrizione";
         placeholderTitle = "Inserisci un titolo per il tuo feedback";
         placeholderBeschreibung =
            "Dicci di più! Tutto viene inviato in modo anonimo! Non è possibile rispondere, pertanto la descrizione dovrà essere quanto più dettagliata e significativa possibile.";
      } else {
         title = "Title";
         beschreibung = "Description";
         placeholderTitle = "Enter a title for your feedback";
         placeholderBeschreibung =
            "Tell us more! Everything is submitted anonymously! No reply is possible, so the description should be as detailed and meaningful as possible.";
      }

      const modal = new ModalBuilder().setCustomId("feedbackModal").setTitle("Feedback (anonym)");

      const feld1 = new TextInputBuilder()
         .setCustomId("feedbackTitel")
         .setLabel(title)
         .setStyle(TextInputStyle.Short)
         .setMaxLength(200)
         .setPlaceholder(placeholderTitle)
         .setRequired(true);

      const feld2 = new TextInputBuilder()
         .setCustomId("feedbackBeschreibung")
         .setLabel(beschreibung)
         .setStyle(TextInputStyle.Paragraph)
         .setPlaceholder(placeholderBeschreibung)
         .setRequired(true);

      const feedbackActionRow1 = new ActionRowBuilder().addComponents(feld1);
      const feedbackActionRow2 = new ActionRowBuilder().addComponents(feld2);

      modal.addComponents(feedbackActionRow1, feedbackActionRow2);

      await interaction.showModal(modal);
   }
}
