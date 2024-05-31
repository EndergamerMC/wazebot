import { EmbedBuilder, SlashCommandBuilder, PermissionsBitField } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('nickname')
        .setDescription('Hier kannst du deinen Nickname ändern')
        .addStringOption((option) =>
            option
                .setName('editorname')
                .setDescription('Gebe hier deinen Editornamen ein.')
                .setRequired(true)

        ).addStringOption((option) =>
            option
                .setName('level')
                .setDescription('Wähle hier dein Editor-Level aus.')
                .addChoices(
                    { name: 'Level 1', value: '(1)' },
                    { name: 'Level 2', value: '(2)' },
                    { name: 'Level 3', value: '(3)' },
                    { name: 'Level 4', value: '(4)' },
                    { name: 'Level 5', value: '(5)' },
                    { name: 'Level 6', value: '(6)' },
                )
                .setRequired(true)
        ).addStringOption((option) =>
            option
                .setName('name')
                .setDescription('Gebe hier deinen Namen ein.')
                .setRequired(true)
        ).addStringOption((option) =>
            option
                .setName('land')
                .setDescription('Wähle hier dein Land aus.')
                .addChoices(
                    { name: 'Deutschland', value: '🇩🇪' },
                    { name: 'Österreich', value: '🇦🇹' },
                    { name: 'Schweiz', value: '🇨🇭' },
                )
                .setRequired(true)
        )

export function execute(interaction) {
    console.log('Nickname Command');
    const editornameNickname = interaction.options.getString('editorname');
    const levelNickname = interaction.options.getString('level');
    const nameNickname = interaction.options.getString('name');
    const landNickname = interaction.options.getString('land');

    const nicknameGeändertEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle('Nickname geändert!')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription('Dein Nickname wurde erfolgreich geändert.')
        .setTimestamp()
        .setFooter({ text: `Nickname von ${interaction.user.tag} geändert.` })



    const hasPermission = interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.ManageNicknames)
    const isOverUser = interaction.member.manageable

    const nicknameFailIsOverUserEmbed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle('Nickname ändern nicht möglich!')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription('Dies hat folgenden Grund:')
        .setTimestamp()
        .addFields(
            { name: ' ', value: '- Deine Rolle ist über der des Bots oder du bist der Servereigentümer' },
        )

    const nicknameFailHasPermissionEmbed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle('Nickname ändern nicht möglich!')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription('Dies hat folgenden Grund:')
        .setTimestamp()
        .addFields(
            { name: ' ', value: `- Der Bot hat nicht die Berechtigung 'Nicknames verwalten'` },
        )

    const nicknameFailBeidesEmbed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle('Nickname ändern nicht möglich!')
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setDescription('Dies hat folgende Gründe:')
        .setTimestamp()
        .addFields(
            { name: ' ', value: `- Der Bot hat nicht die Berechtigung 'Nicknames verwalten'` },
            { name: ' ', value: '- Deine Rolle ist über der des Bots oder bist der Servereigentümer' },
        )

    if (!hasPermission && !isOverUser) {
        interaction.reply({
            embeds: [nicknameFailBeidesEmbed],
        })
        return;
    }

    if (!isOverUser) {
        interaction.reply({
            embeds: [nicknameFailIsOverUserEmbed],
        })
    }

    if (!hasPermission) {
        interaction.reply({
            embeds: [nicknameFailHasPermissionEmbed]
        })
    }

    if (isOverUser && hasPermission) {
        interaction.member.setNickname(editornameNickname + ' ' + levelNickname + ' ' + landNickname + ' - ' + nameNickname);
        interaction.reply({
            embeds: [nicknameGeändertEmbed],
        })
    }
}