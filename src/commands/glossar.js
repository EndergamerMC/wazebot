import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('glossar')
        .setDescription('Glossar')
        .addStringOption((option) =>
            option
                .setName('auswahl')
                .setDescription('Zu was möchtest du Infos bekommen?')
                .addChoices(
                    { name: 'Rollen', value: 'glossar_rollen' },
                    { name: 'Abkürzungen, etc.', value: 'glossar_abkuerzungen_begriffe' },
                )
                .setRequired(true)
        )

export function execute(interaction) {
    console.log('Glossar Command');
    if (interaction.options.getString('auswahl') === 'glossar_rollen') {
        console.log('Glossar_rollen Command');

        const glossarRollenEmbed = new EmbedBuilder()
            .setColor(0x5CBDFF)
            .setTitle('Rollen-Glossar - Link zum Glossar im Wazeopedia (klick)')
            .setURL('https://wazeopedia.waze.com/wiki/Germany/Glossar')
            .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
            .setDescription('**Hier findest du Informationen zu Rollen.**')
            .addFields(
                { name: 'AM', value: 'Area Manager', inline: true },
                { name: 'BM', value: 'Bundesland Manager', inline: true },
                { name: 'CM', value: 'Country Manager', inline: true },
                { name: 'GC', value: 'Global Champ', inline: true },
                { name: 'LC', value: 'Local Champ', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Angefragt von ${interaction.user.tag}` })


        interaction.reply({
            embeds: [glossarRollenEmbed],
        })
        //Glossar Abkürzungen und Begriffe Command
    } else if (interaction.options.getString('auswahl') === 'glossar_abkuerzungen_begriffe') {
        console.log('Glossar_abkuerzungen Command');

        const glossarAbkürzungenBegriffeEmbed = new EmbedBuilder()
            .setColor(0x5CBDFF)
            .setTitle('Oft verwendete Begriffe/Abkürzungen - Link zum Glossar im Wazeopedia (klick)')
            .setURL('https://wazeopedia.waze.com/wiki/Germany/Glossar')
            .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
            .setDescription('**Hier findest du alle gängigen Begriffe/Abkürzungen.**')
            .addFields(
                { name: 'DACH', value: 'Deutschland, Austria, Confederatio Helvetica', inline: true },
                { name: 'JB', value: 'Junction Box (Kreuzungsbox)', inline: true },
                { name: 'Loop', value: 'Schlaufe (2 Segmente mit gleichem Anfangs-und Endpunkt)', inline: true },
                { name: 'MP', value: 'Map Problem (Kartenfehler)', inline: true },
                { name: 'MC', value: 'Map Comment (Kartenkommentar)', inline: true },
                { name: 'mDL', value: 'Micro Dogleg', inline: true },
                { name: 'PLR', value: 'Parking Lot Road (Parkplatzstraße)', inline: true },
                { name: 'PL', value: 'Permalink', inline: true },
                { name: 'PR', value: 'Private Road (Privatstraße)', inline: true },
                { name: 'PUR', value: 'POI Update Request (Aktualisierungsanfrage für Orte)', inline: true },
                { name: 'QW', value: 'Tasten Q und W', inline: true },
                { name: 'RR', value: 'RailRoad (Eisenbahn)', inline: true },
                { name: 'RTC', value: 'Real Time Closure', inline: true },
                { name: 'SL', value: 'Speedlimit (Geschwindigkeitsbegrenzung)', inline: true },
                { name: 'ASM', value: 'Autonomous Self Management', inline: true },
                { name: 'TBR', value: 'Time Based Restriction', inline: true },
                { name: 'TBTR', value: 'Time Based Turn Restriction', inline: true },
                { name: 'TTS', value: 'Text To Speech (Gesprochene Navigationsanweisungen)', inline: true },
                { name: 'TIO', value: 'Turn Instruction Override', inline: true },
                { name: 'UR', value: 'Update Request', inline: true },
                { name: 'WME', value: 'Waze Map Editor (Karteneditor)', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `Angefragt von ${interaction.user.tag}` })

        interaction.reply({
            embeds: [glossarAbkürzungenBegriffeEmbed],
        });
    }
}