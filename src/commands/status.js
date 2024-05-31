import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('status')
        .setDescription('Ändere den Status des Bots')
        .addStringOption((option) =>
            option
                .setName('text')
                .setDescription('text')
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('status')
                .setDescription('Der Status den der Bot haben soll')
                .addChoices(
                    { name: 'Custom', value: 4 },
                    { name: 'Spielt ...', value: 0 },
                    { name: 'Hört ... zu', value: 2 },
                    { name: 'Schaut ...', value: 3 },
                    { name: 'Tritt an in ...', value: 5 },
                )
        )


export function execute(interaction) {
    const status_text = interaction.options.getString('text')
    let status_type = interaction.options.getNumber('status')

    if (status_type === null) {
        status_type = 4
    }

    const statusEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Status geändert')
        .setDescription(`Der Status des Bots wurde erfolgreich von ${interaction.member} geändert.`)

    interaction.client.user.setPresence({ activities: [{ name: status_text, type: status_type }] });

    interaction.reply({
        embeds: [statusEmbed],
    })
}
