import { EmbedBuilder, Events } from "discord.js";

export const name = Events.MessageCreate;

export function execute(message) {
   const serverId = message.guild.id;

   if (message.author.bot) return;

   if (message.content.includes("waze.com") && message.content.includes("&s=")) {
      if (message.channel.parentId == "981343247601401946") {
         return;
      }

      if (serverId === "1303126662883315803") {
         //Waze PUG Server

         const ebenenEmbed = new EmbedBuilder()
            .setColor(0xff0000)
            .setTitle("**__Layers sent!__**")
            .setAuthor({
               name: "Waze Papua New Guinea",
               iconURL: "https://cdn.discordapp.com/icons/1303126662883315803/7ce51403e6557a050a6c974645e577ba.webp?size=96",
            })
            .addFields(
               {
                  name: " ",
                  value: `<@${message.author.id}>, Please make sure to __**not**__ send any layers! Please __**uncheck**__ the box for **"Include layer settings"**!`,
               },
               { name: " ", value: `Your message:` },
               { name: " ", value: `${message.content}` }
            );

         message.delete();
         console.log(`${message.author.tag} said: ${message.content}`);

         message.channel.send({
            embeds: [ebenenEmbed],
         });
      } else {
         //Alle anderen Server
         if (serverId === "1303126662883315803") return;

         const ebenenEmbed = new EmbedBuilder()
            .setColor(0xff0000)
            .setTitle("**__Ebenen mitgesendet!__**")
            .setAuthor({
               name: "Waze DACH",
               iconURL: "https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw",
            })
            .addFields(
               {
                  name: " ",
                  value: `<@${message.author.id}>, bitte achte darauf, __**keine**__ Ebenen mit zu senden! Bitte __**entferne**__ den Haken bei **"Ebenen-Einstellungen mitsenden"**!`,
               },
               { name: " ", value: `Deine Nachricht:` },
               { name: " ", value: `${message.content}` }
            );

         message.delete();
         console.log(`${message.author.tag} said: ${message.content}`);

         message.channel.send({
            embeds: [ebenenEmbed],
         });
      }
   }
}
