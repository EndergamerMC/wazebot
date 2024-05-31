import { Events } from 'discord.js';
import { config } from '../config.js';

export const name = Events.InteractionCreate

export function execute(interaction) {
    if (interaction.isButton) {
        if (
            interaction.customId === 'baden_württemberg' ||
            interaction.customId === 'bayern' ||
            interaction.customId === 'berlin' ||
            interaction.customId === 'brandenburg' ||
            interaction.customId === 'bremen' ||
            interaction.customId === 'mecklenburg_vorpommern' ||
            interaction.customId === 'hamburg' ||
            interaction.customId === 'hessen' ||
            interaction.customId === 'niedersachsen' ||
            interaction.customId === 'nordrhein_westfalen' ||
            interaction.customId === 'rheinland_pfalz' ||
            interaction.customId === 'saarland' ||
            interaction.customId === 'sachsen' ||
            interaction.customId === 'sachsen_anhalt' ||
            interaction.customId === 'schleswig_holstein' ||
            interaction.customId === 'thueringen' ||
            interaction.customId === 'blue' ||
            interaction.customId === 'red' ||
            interaction.customId === 'green' ||
            interaction.customId === 'purple' ||
            interaction.customId === 'pink'
        ) {

            console.log('Rollen Button');
            const serverId = interaction.guild.id;
            const serverRoles = config[serverId].roles;
            console.log(config[serverId]);

            const role = interaction.guild.roles.cache.get(
                serverRoles[interaction.customId.toUpperCase()]
            );

            if (!role)
                return interaction.reply({ content: 'Rolle nicht gefunden', ephemeral: true });

            const hasRole = interaction.member.roles.cache.has(role.id);
            console.log(hasRole);

            if (hasRole) {
                console.log('Benutzer hat die Rolle bereits.')
                return interaction.member.roles
                    .remove(role)
                    .then((member) =>
                        interaction.reply({
                            content: `Die ${role} Rolle wurde von dir entfernt ${member}`,
                            ephemeral: true,
                        }),
                    ).catch((err) => {
                        console.log(err);
                        return interaction.reply({
                            content: `Etwas ist schiefgelaufen. Die ${role} Rolle wurde nicht von dir entfernt ${member} `,
                            ephemeral: true,
                        });
                    });
            }

            return interaction.member.roles
                .add(role)
                .then((member) =>
                    interaction.reply({
                        content: `Die ${role} Rolle wurde dir hinzugefügt ${member}`,
                        ephemeral: true,
                    }),
                ).catch((err) => {
                    console.log(err);
                    return interaction.reply({
                        content: `Etwas ist schiefgelaufen. Die ${role} Rolle wurde dir nicht hinzugefügt ${member} `,
                        ephemeral: true,
                    });
                });
        }
    }
}