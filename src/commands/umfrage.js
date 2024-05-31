import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('umfrage')
        .setDescription('Umfrage erstellen')
        .addStringOption((option) =>
            option
                .setName('umfrage')
                .setDescription('Titel der Umfrage')
                .setRequired(true)
        )

export async function execute(interaction) {
    const umfrageTitel = interaction.options.getString('umfrage');

    const UmfrageEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Neue Umfrage')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .addFields(
            { name: `${umfrageTitel}`, value: ` ` }
        )

    const UmfrageGesendetEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Umfrage gesendet')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .addFields(
            { name: `Name der Umfrage: ${umfrageTitel}`, value: ` ` }
        )

    const message = await interaction.channel.send({
        embeds: [UmfrageEmbed],
    });
    message.react('👍')
        .then(() => message.react('👎'))
        .catch(error => console.error('Einer der Emojis konnte nicht hinzugefügt werden:', error));

    await interaction.reply({
        embeds: [UmfrageGesendetEmbed],
        ephemeral: true,
    });
}