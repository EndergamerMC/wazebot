import { EmbedBuilder, Events } from 'discord.js';

export const name = Events.MessageCreate

export function execute(message) {
    if (message.author.bot) return;

    if (message.content.includes('waze.com') && message.content.includes('&s=')) {

        if (message.channel.parentId == '981343247601401946') {
            return;
        }

        const ebenenEmbed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('**__Ebenen mitgesendet!__**')
            .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
            .addFields(
                { name: '\ ', value: `<@${message.author.id}>, bitte achte darauf, __**keine**__ Ebenen mit zu senden! Bitte __**entferne**__ den Haken bei **"Ebenen-Einstellungen mitsenden"**!` },
                { name: '\ ', value: `Deine Nachricht:` },
                { name: '\ ', value: `${message.content}` },
            )

        message.delete();
        console.log(`${message.author.tag} said: ${message.content}`);

        message.channel.send({
            embeds: [ebenenEmbed],
        });
    }
}