import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Events, InteractionType } from 'discord.js';
import { config } from '../config.js';

export const name = Events.InteractionCreate

export function execute(interaction) {
    if (interaction.type === InteractionType.ModalSubmit) {
        if (interaction.customId === 'rollenAnfrageModal') {
            console.log('Rollen-Anfrage Modal Submit');

            const anfrageEmbed = new EmbedBuilder()
                .setColor(0x5CBDFF)
                .setTitle('Neue Rollen-Anfrage')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Ein Editor hat eine Rollen-Anfrage eingereicht.**')
                .addFields(
                    { name: 'Editorname:', value: `${interaction.fields.getTextInputValue('username')}`, inline: true },
                    { name: 'Rolle:', value: `${interaction.fields.getTextInputValue('level/rolle')}`, inline: true },
                )
                .addFields(
                    { name: 'Discord User:', value: `${interaction.member}` },
                )
                .setTimestamp()

            const anfrageErfolgreichEmbed = new EmbedBuilder()
                .setColor(0x5CBDFF)
                .setTitle('Rolle angefragt')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Die Rolle/Rollen wurden erfolgreich angefragt.**')
                .setTimestamp()

            const ModeratorButtons = new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setLabel(`Editor Profil von ${interaction.fields.getTextInputValue('username')}`)
                    .setStyle(ButtonStyle.Link)
                    .setURL(`https://www.waze.com/de/user/editor/${interaction.fields.getTextInputValue('username')}`),
                new ButtonBuilder()
                    .setLabel('Rollen hinzufügen')
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId('rollenHinzufuegen'),

            )

            interaction.reply({
                embeds: [anfrageErfolgreichEmbed],
                ephemeral: true,
            });

            const serverId = interaction.guild.id;

            const forumChannel = config[serverId].channels.forum_channel;

            const channel = interaction.client.channels.cache.get(forumChannel);
            const tag = config[serverId].tags.forum_rollenanfrage_tag;
            channel.threads.create({
                name: `Rollenanfrage für ${interaction.fields.getTextInputValue('username')}, Angefragt von ${interaction.member}`,
                message: {
                    embeds: [anfrageEmbed],
                    components: [ModeratorButtons],
                },
                appliedTags: [tag],
            });

        }
    }
}