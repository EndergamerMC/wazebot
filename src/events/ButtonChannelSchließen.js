import { EmbedBuilder, Events } from 'discord.js';

export const name = Events.InteractionCreate

export function execute(interaction) {
    if (interaction.isButton) {
        if (interaction.customId === 'channelSchließen') {
            const channelGeschlossenEmbed = new EmbedBuilder()
                .setColor(0x006800)
                .setTitle('Channel wird geschlossen')
                .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
                .setDescription('**Channel wird in 10 Sekunden geschlossen.**')
                .setTimestamp()
                .setFooter({ text: `Geschlossen von ${interaction.user.tag}` })

            interaction.reply({
                embeds: [channelGeschlossenEmbed],
            });
            setTimeout(function() {
                interaction.channel.setArchived(true);
            }, 10000);
            
        }
    }
}