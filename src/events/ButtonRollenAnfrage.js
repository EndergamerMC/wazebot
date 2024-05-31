import { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';

export const name = Events.InteractionCreate

export function execute(interaction) {
    if (interaction.isButton) {
        if (interaction.customId === 'rollenAnfrage') {
            console.log('Rollen-Anfrage Button');

            const rollenAnfrageModal = new ModalBuilder()
                .setTitle('Rollen Anfrage')
                .setCustomId('rollenAnfrageModal')
                .setComponents(
                    new ActionRowBuilder().setComponents(
                        new TextInputBuilder()
                            .setLabel('username')
                            .setCustomId('username')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                    ),
                    new ActionRowBuilder().setComponents(
                        new TextInputBuilder()
                            .setLabel('level/rolle')
                            .setCustomId('level/rolle')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                    )
                )
            

            interaction.showModal(rollenAnfrageModal);
        }
    }
}