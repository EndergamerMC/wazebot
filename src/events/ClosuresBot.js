import { Events } from 'discord.js';
import { config } from '../config.js';

export const name = Events.MessageCreate

// 

export function execute(message) {
    if (message.channel.id != '1049137611261890560') return;
    if (!message.author.bot) return;

    const serverId = '805758643114737676';

    // //User/Trust/Timestamp
    // console.log('field0:');
    // console.log(message.embeds[0].data.fields[0].value);

    // //Adress
    // console.log('field1:');
    // console.log(message.embeds[0].data.fields[1].value);

    // //Reason
    // console.log('field2:');
    // console.log(message.embeds[0].data.fields[2].value);

    // //Segment Type
    // console.log('field3:');
    // console.log(message.embeds[0].data.fields[3].value);

    // //Link to WME/Livemap/App
    // console.log('field4:');
    // console.log(message.embeds[0].data.fields[4].value);

    let channel1;
    let channel2;

    if (message.embeds[0].data.fields[1].value.includes(', Baden-Württemberg')) {
        console.log('Baden-Württemberg');
        channel1 = config[serverId].channels.BADEN_WÜRTTEMBERG;
    } else if (message.embeds[0].data.fields[1].value.includes(', Bavaria')) {
        console.log('Bavaria');
        channel1 = config[serverId].channels.BAYERN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Berlin')) {
        console.log('Berlin');
        channel1 = config[serverId].channels.BERLIN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Brandenburg')) {
        console.log('Brandenburg');
        channel1 = config[serverId].channels.BRANDENBURG;
    } else if (message.embeds[0].data.fields[1].value.includes(', Bremen')) {
        console.log('Bremen');
        channel1 = config[serverId].channels.BREMEN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Mecklenburg-Vorpommern')) {
        console.log('Mecklenburg-Vorpommern');
        channel1 = config[serverId].channels.MECKLENBURG_VORPOMMERN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Hamburg')) {
        console.log('Hamburg');
        channel1 = config[serverId].channels.HAMBURG;
    } else if (message.embeds[0].data.fields[1].value.includes(', Hesse')) {
        console.log('Hesse');
        channel1 = config[serverId].channels.HESSEN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Lower Saxony')) {
        console.log('Lower Saxony');
        channel1 = config[serverId].channels.NIEDERSACHSEN;
    } else if (message.embeds[0].data.fields[1].value.includes(', North Rhine-Westphalia')) {
        console.log('North Rhine-Westphalia');
        channel1 = config[serverId].channels.NORDRHEIN_WESTFALEN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Rheinland-Pfalz')) {
        console.log('Rheinland-Pfalz');
        channel1 = config[serverId].channels.RHEINLAND_PFALZ;
    } else if (message.embeds[0].data.fields[1].value.includes(', Saarland')) {
        console.log('Saarland');
        channel1 = config[serverId].channels.SAARLAND;
    } else if (message.embeds[0].data.fields[1].value.includes(', Saxony') && !message.embeds[0].data.fields[1].value.includes('Anhalt')) {
        console.log('Saxony');
        channel1 = config[serverId].channels.SACHSEN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Anhalt')) {
        console.log('Saxony-Anhalt');
        channel1 = config[serverId].channels.SACHSEN_ANHALT;
    } else if (message.embeds[0].data.fields[1].value.includes(', Schleswig-Holstein')) {
        console.log('Schleswig-Holstein');
        channel1 = config[serverId].channels.SCHLESWIG_HOLSTEIN;
    } else if (message.embeds[0].data.fields[1].value.includes(', Thuringia')) {
        console.log('Thuringia');
        channel1 = config[serverId].channels.THUERINGEN;
    }

    if (message.embeds[0].data.fields[3].value.includes('Freeway')) {
        console.log('Autobahn');
        channel2 = config[serverId].channels.AUTOBAHN;
    }

    const channel = message.client.channels.cache.get(channel1);

    const channel_fw = message.client.channels.cache.get(channel2);

    if (channel_fw) {
        try {
            channel_fw.send({
                embeds: message.embeds
            })
            console.log('neue Sperrung (FW)');
        } catch (error) {
            console.error(error);
        }
    }

    try {
        channel.send({
            embeds: message.embeds
        })
        console.log('neue Sperrung');
    } catch (error) {
        console.error(error);
    }
}

// <Message>.embeds[i].data.fields[i].value