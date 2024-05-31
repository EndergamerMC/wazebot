// export function handleGeloestButton(interaction, erinnerungenSlice, urDokument) {
//     const index = parseInt(interaction.customId.split('_')[1]) - 1;
//     const erinnerung = erinnerungenSlice[index];

//     // Verschiebe das erinnerung-Objekt in die Liste der gelösten Erinnerungen
//     urDokument.gelösteErinnerungen.push(erinnerung);

//     // Entferne das erinnerung-Objekt aus der Liste der ungelösten Erinnerungen
//     urDokument.ungelösteErinnerungen.splice(index, 1);
// }

// export function handleUngeloestButton(interaction, erinnerungenSlice, urDokument) {
//     const index = parseInt(interaction.customId.split('_')[1]) - 1;
//     const erinnerung = erinnerungenSlice[index];

//     // Verschiebe das erinnerung-Objekt in die Liste der ungelösten Erinnerungen
//     urDokument.ungelösteErinnerungen.push(erinnerung);

//     // Entferne das erinnerung-Objekt aus der Liste der gelösten Erinnerungen
//     urDokument.gelösteErinnerungen.splice(index, 1);
// }