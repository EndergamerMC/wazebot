import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, Events, MessageComponentInteraction, StringSelectMenuBuilder } from 'discord.js';

const LEVELROLES = {
    L1: '1077249347705638944',
    L2: '1077249386486169600',
    L3: '1077249401086554152',
    L4: '1077249416110547005',
    L5: '1077249428798316574',
    L6: '1077249442618548375',
}

export const name = Events.InteractionCreate

export async function execute(interaction, message) {
    if (interaction.isButton) {
        if (interaction.customId === 'rollenHinzufuegen') {

            const rollenSelectMenu = new ActionRowBuilder().setComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('rollenselect')
                    .setPlaceholder('Wähle hier die Rollen aus.')
                    .setOptions(
                        { label: 'L1', emoji: '1️⃣', description: 'Editor Level 1', value: '1077249347705638944' },
                        { label: 'L2', emoji: '2️⃣', description: 'Editor Level 2', value: '1077249386486169600' },
                        { label: 'L3', emoji: '3️⃣', description: 'Editor Level 3', value: '1077249401086554152' },
                        { label: 'L4', emoji: '4️⃣', description: 'Editor Level 4', value: '1077249416110547005' },
                        { label: 'L5', emoji: '5️⃣', description: 'Editor Level 5', value: '1077249428798316574' },
                        { label: 'L6', emoji: '6️⃣', description: 'Editor Level 6', value: '1077249442618548375' },
                    )
                    .setMinValues(1)
                    .setMaxValues(6)
            )

            const rollenHinzufuegenEmbed = new EmbedBuilder()
                .setColor(0x5CBDFF)
                .setTitle('Rollen Auswahl')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Wähle die Rollen aus**')
                .setTimestamp()

            const rollenUserAbwarteEmbed = new EmbedBuilder()
                .setColor(0x5CBDFF)
                .setTitle('User')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Markiere den User im Channel**')
                .setTimestamp()

            const rollenHinzufegügtEmbed = new EmbedBuilder()
                .setColor(0x006800)
                .setTitle('Rollen hinzugefügt')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Rollen wurden dem User erfolgreich hinzugefügt**')
                .setTimestamp()

            const channelSchließenButton = new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setLabel('Channel schließen')
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId('channelSchließen'),
            )

            await interaction.reply({
                embeds: [rollenHinzufuegenEmbed],
                components: [rollenSelectMenu],
            });


            const collector = interaction.channel.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 99999999, max: 1 });

            collector.on('collect', async menuInteraction => {
                if (menuInteraction.customId === 'rollenselect') {
                    console.log('kjsdhf');
                    menuInteraction.reply({
                        embeds: [rollenUserAbwarteEmbed],
                    })
                    console.log(menuInteraction.values);

                    const messageFilter = message => (message.content.startsWith('<@') && message.member.id === interaction.member.id);

                    const messageCollector = interaction.channel.createMessageCollector({ filter: messageFilter, time: 99999999, max: 1 });

                    await messageCollector.on('collect', function (message) {
                        console.log('user mentioned')
                        console.log(message.mentions.members.first().id);
                        message.channel.send({
                            embeds: [rollenHinzufegügtEmbed],
                            components: [channelSchließenButton],
                        });
                        message.mentions.members.first().roles.add(menuInteraction.values);
                    });
                }
            });
        }
    }
}

