import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

export const global = true;

export const data =
    new SlashCommandBuilder()
        .setName('docs')
        .setDescription('Links aus dem Wazeopedia')
        .addStringOption(option =>
            option
                .setName('suche')
                .setDescription('Der Artikel nach dem du suchen möchtest')
                .setRequired(true)
                .setAutocomplete(true)
        )

export async function autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused().toLowerCase();

    const nothingSelectedChoices = [
        'Startseite',
        'Straßennetz bearbeiten',
        'Orte und Navigationspunkte',
        'Rollen- und Ansprechpartner',
        'Routing',
    ]

    const choices = [
        'Startseite',
        'Straßennetz bearbeiten',
        'Straßennetz bearbeiten: Segmenttypen',
        'Straßennetz bearbeiten: Straßen und Orte benennen in Deutschland',
        'Straßennetz bearbeiten: Kreuzungen',
        'Straßennetz bearbeiten: Genauigkeit der Waze Karte',
        'Straßennetz bearbeiten: Abbiegeanweisungen über Pfeile',
        'Straßennetz bearbeiten: Anweisungen auf Pfeilen (eng. Turn Guidance / TG)',
        'Straßennetz bearbeiten: Soft und Hard Turns',
        'Straßennetz bearbeiten: Erstellen und bearbeiten eines Kreisverkehrs',
        'Straßennetz bearbeiten: Kreuzungsboxen',
        'Straßennetz bearbeiten: Unterführungen und Brücken',
        'Straßennetz bearbeiten: Anleitung zur Bearbeitung von deutschen Autobahnen',
        'Straßennetz bearbeiten: Fußwege und Privatstraßen',
        'Straßennetz bearbeiten: Segmentattribute',
        'Straßennetz bearbeiten: Straßensperrungen und zeitlich beschränkte Fahrverbote',
        'Straßennetz bearbeiten: Spurassistent',
        'Straßennetz bearbeiten: Straßenbreite',
        'Straßennetz bearbeiten: Blitzer',
        'Straßennetz bearbeiten: Bahnübergänge',
        'Straßennetz bearbeiten: WME Hausnummern',
        'Straßennetz bearbeiten: WME Map Problems',
        'Straßennetz bearbeiten: Verstreute Orte',
        'Straßennetz bearbeiten: Base Map 1.0',
        'Straßennetz bearbeiten: Die Server Bänke',
        'Straßennetz bearbeiten: Wann stelle ich eine Frage im Forum',
        'Straßennetz bearbeiten: Hilf mit Waze zu verbessern',
        'Straßennetz bearbeiten: Zeichne Straße auf',
        'Straßennetz bearbeiten: Die soziale Vernetzung',
        'Straßennetz bearbeiten: Die Waze Pendler Gruppen',
        'Straßennetz bearbeiten: Der Waze Chat',
        'Straßennetz bearbeiten: RSS Feeds',
        'Straßennetz bearbeiten: Feed List',
        'Straßennetz bearbeiten: Anleitung für Benutzer',
        'Orte und Navigationspunkte',
        'Orte und Navigationspunkte: POI Arten',
        'Orte und Navigationspunkte: POI Arten: Punkt-POI',
        'Orte und Navigationspunkte: POI Arten: Flächen-POI',
        'Orte und Navigationspunkte: POI Detailinformationen',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Adresse',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Name',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Kategorie',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Beschreibung',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Einfahrten',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Sperren',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Typ',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Externe Anbieter',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Website',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Telefon',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Dienste/Services',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Öffnungszeiten',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos # Bestimmen von akzeptierbaren Fotos',
        'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos # Ein Foto bei einem POI löschen',
        'Orte und Navigationspunkte: PUR (Place Update Request)',
        'Orte und Navigationspunkte: PUR (Place Update Request): Neuer POI',
        'Orte und Navigationspunkte: PUR (Place Update Request): Neue POI-Detailinformationen',
        'Orte und Navigationspunkte: PUR (Place Update Request): Neues Foto',
        'Orte und Navigationspunkte: PUR (Place Update Request): POI wurde markiert',
        'Orte und Navigationspunkte: PUR (Place Update Request): Akzeptieren oder ablehnen?',
        'Orte und Navigationspunkte: PUR (Place Update Request): Doppelte Orte',
        'Orte und Navigationspunkte: PUR (PLace Update Request): Private Orte',
        'Orte und Navigationspunkte: POI Update FAQ',
        'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI',
        'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI: Bahnhöfe',
        'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI: U-Bahn Stationen/Haltestellen',
        'Orte und Navigationspunkte: Die Kategorien',
        'Orte und Navigationspunkte: Die Kategorien: Wann ist eine Fläche zu verwenden, wann ein Punkt?',
        'Orte und Navigationspunkte: Die Kategorien: Tabelle',
        'Orte und Navigationspunkte: Die Kategorien: Geregelte Abweichungen von der Tabelle',
        'Orte und Navigationspunkte: Die Kategorien: POI für die es keine eindeutig passende Kategorie gibt',
        'Gemeindeliste Deutschland',
        'Gesamtliste Deutschland',
        'Rollen- & Ansprechpartner',
        'Rollen- & Ansprechpartner: Allgemeines',
        'Rollen- & Ansprechpartner: Communityrollen',
        'Rollen- & Ansprechpartner: Communityrollen: Coordinator',
        'Rollen- & Ansprechpartner: Communityrollen: Global Champ (GC)',
        'Rollen- & Ansprechpartner: Communityrollen: Local Champ (LC)',
        'Rollen- & Ansprechpartner: Communityrollen: Weitere Rollen in der deutschen Waze-Community',
        'Rollen- & Ansprechpartner: Communityrollen: Beta Leader',
        'Rollen- & Ansprechpartner: Editorrollen',
        'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM)',
        'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM): Mentoren',
        'Rollen- & Ansprechpartner: Editorrollen: Bundesland Manager (BM)',
        'Rollen- & Ansprechpartner: Editorrollen: Closure Manager',
        'Rollen- & Ansprechpartner: Editorrollen: Area Manager (AM)',
        'Unser Community Discord Server',
        'Diskussionsforum',
        'Die Waze Pendler Gruppen',
        'Der Waze Chat',
        'Routing',
        'Routing: Wie Waze routen kalkuliert',
        'Routing: Wie Waze routen kalkuliert: Anfragen an den Routing Server',
        'Routing: Wie Waze routen kalkuliert: Routenberechnung im Client',
        'Routing: Wie Waze routen kalkuliert: Straßentypen und Kreuzungen',
        'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit',
        'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Standard-Geschwindigkeiten',
        'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Aktuelle Fahrgeschwindigkeiten',
        'Routing: Wie Waze routen kalkuliert: Fernstreckennetz',
        'Routing: Wie Waze routen kalkuliert: Zeitstrafen (Penalty-System)',
        'Routing: Wie Waze routen kalkuliert: Bearbeiten von Kreuzungen legt diese eindeutig fest',
        'Routing: Wie Waze routen kalkuliert: Parkplatzstraßen (Parking-Lot-Road)',
        'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen',
        'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen: Staumeldungen',
        'Routing: Fußwege und Privatstraßen',
        'Routing: Kreuzungsboxen',
        'Routing: Kreuzungsboxen: Anlegen und Bearbeiten im WME',
        'Routing: Kreuzungsboxen: Funktionsweisen',
        'Routing: Kreuzungsboxen: Funktionsweisen: Beeinflussung des Routings (Paths)',
        'Routing: Kreuzungsboxen: Funktionsweisen: Setzen von Path-spezifischen Anweisungen',
        'Routing: Kreuzungsboxen: Funktionsweisen: Verbesserung der Datenerfassung für ETA-Berechnung',
        'Routing: Echtzeitsperrungen',
        'Routing: Echtzeitsperrungen: Allgemeines',
        'Routing: Echtzeitsperrungen: Verwendung',
        'Routing: Echtzeitsperrungen: Verwendung: Anwendungsfälle',
        'Routing: Echtzeitsperrungen: Verwendung: Fernrouting',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Berechtigung',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Beschreibung',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Fahrtrichtung',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Datum und Uhrzeit',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Ereignis',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Speichern',
        'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Kontrolle und Anzeige',
        'Routing: Echtzeitsperrungen: Besonderheiten im WME',
        'Routing: Echtzeitsperrungen: Besonderheiten im WME: Einschränkungen bei der Sperrdauer',
        'Routing: Echtzeitsperrungen: Besonderheiten im WME: Fehler beim Speichern',
        'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kreuzender Verkehr',
        'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kartenkommentar',
        'Routing: Echtzeitsperrungen: Änderung einer Sperrung',
        'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Aufruf',
        'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Bearbeiten und Speichern',
        'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Segmenthistory',
        'Routing: Echtzeitsperrungen: Löschen einer Sperrung',
        'Routing: Echtzeitsperrungen: Tipps und Tricks/WME',
        'Routing: Echtzeitsperrungen: Eintrag in der App',
        'Routing: Straßensperrungen und zeitlich beschränkte Fahrverbote',
        'Verkehrsereignisse anlegen',
        'Status des Kartenupdates',
        'Mein Dashboard',
        'Mein Dashboard: Link zum Dashboard',
        'Mein Dashboard: Dashboard',
        'Mein Dashboard: Dashboard: Dashboard (persönliche Profilseite',
        'Mein Dashboard: Dashboard: Persönliche Details',
        'Mein Dashboard: Dashboard: Persönliche Details: Facebook',
        'Mein Dashboard: Dashboard: Meine Fahrtenstatistik',
        'Funktionen der Waze App: Meldungen erstellen',
        'Funktionen der Waze App: Meldungen erstellen: Meldung erstellen',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Stau',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kontrolle',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Unfall',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Gefahr',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Map-Chat',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kartenfehler',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Ort',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Pannenhilfe',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Sperrung',
        'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: ',
        'Funktionen der Waze App: Meldungen erstellen: Points and limits',
        'Funktionen der Waze App: Meldungen erstellen: Impact to routing',
        'Funktionen der Waze App: Straßen mit der Waze App aufzeichnen',
        'Funktionen der Waze App: Suchcodes',
        'Waze Blog',
        'Einführung in die Kartenbearbeitung',
        'Einführung in die Kartenbearbeitung: Einleitung',
        'Einführung in die Kartenbearbeitung: Hauptziele: ',
        'Einführung in die Kartenbearbeitung: Hauptziele: Benutzerfreundlichkeit',
        'Einführung in die Kartenbearbeitung: Hauptziele: Einfachheit',
        'Einführung in die Kartenbearbeitung: Hauptziele: Korrekte Routenführung',
        'Einführung in die Kartenbearbeitung: Hauptziele: Erhaltung des bestehenden Zustandes',
        'Einführung in die Kartenbearbeitung: Hauptziele: Unnötige Kreuzungen',
        'Einführung in die Kartenbearbeitung: Hauptziele: End-Kreuzung',
        'Einführung in die Kartenbearbeitung: In der Praxis',
        'Einführung in die Kartenbearbeitung: In der Praxis: Empfohlene Reihenfolge der Arbeitsschritte',
        'Einführung in die Kartenbearbeitung: In der Praxis: Autobahnen und Anschlüsse',
        'Einführung in die Kartenbearbeitung: In der Praxis: Wann sind Ramps an Kreuzungen zu verwenden',
        'Einführung in die Kartenbearbeitung: In der Praxis: Wann ein Kreisverkehr erstellt werden soll',
        'Einführung in die Kartenbearbeitung: In der Praxis: Richtung und Sperren von Straßen',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Gebrauch des "Parkplatz"-Straßentyps',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Einkaufszentren',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Kleinere Parkplätze',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Durchfahrts-Parkplätze',
        'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Parkhäuser',
        'Einführung in die Kartenbearbeitung: Verkehrsberuhigter Bereich',
        'Einführung in die Kartenbearbeitung: Unterdrücken von Verkehrsmeldungen und Kartenfehlern',
        'Einführung in die Kartenbearbeitung: Klassifizierung von Kreuzungen',
        'WME Schnellstart-Anleitung',
        'WME Schnellstart-Anleitung: Einleitung',
        'WME Schnellstart-Anleitung: Anmeldung im Karteneditor',
        'WME Schnellstart-Anleitung: Gebräuchliche Funktionen',
        'WME Schnellstart-Anleitung: Tips und Tricks',
        'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie-Punkte schnell entfernen',
        'WME Schnellstart-Anleitung: Tips und Tricks: Straßen ohne Namen und Stadt erfassen',
        'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie Änderungen bei Mehrfach-Auswahl',
        'WME Schnellstart-Anleitung: Tips und Tricks: Bearbeiten von Kreuzungen legt diese eindeutig fest',
        'WME Schnellstart-Anleitung: Tips und Tricks: Verschieben von Segmenten über die Grenze des Möglichen',
        'WME Schnellstart-Anleitung: Tips und Tricks: Städte-Polygone',
        'WME Schnellstart-Anleitung: Tips und Tricks: Blitzer',

    ];

    const filtered = choices.filter(choice => choice.toLowerCase().includes(focusedValue));

    if (focusedValue === '') {
        await interaction.respond([]);
    } else {
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })).slice(0, 25),
        );
    }
}

export async function execute(interaction) {
    let link;
    let beschreibung;

    const docsEmbed = new EmbedBuilder()
        .setColor(0x5CBDFF)
        .setTitle(`Wazeopedia: ${beschreibung}`)
        .setURL(link)
        .setAuthor({ name: 'Waze DACH', iconURL: 'https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw' })
        .setTimestamp()
        .setFooter({ text: `Angefragt von ${interaction.user.tag}` })

    switch (interaction.options.getString('suche')) {
        case 'Startseite':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Hauptseite';
            beschreibung = 'Die Startseite vom Wazeopedia';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fennetz_bearbeiten';
            beschreibung = 'Wie man das Straßennetz editiert';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Segmenttypen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Segmenttypen';
            beschreibung = 'Die verschiedenen Segmenttypen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Straßen und Orte benennen in Deutschland':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fen_und_Orte_benennen_in_Deutschland';
            beschreibung = 'Regeln für die Benennung von Straßen und Orten in Deutschland';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Kreuzungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungen';
            beschreibung = 'Kreuzungen eintragen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Genauigkeit der Waze Karte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Genauigkeit_der_Waze_Karte';
            beschreibung = 'Genauigkeit der Waze Karte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Abbiegeanweisungen über Pfeile':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Abbiegeanweisungen_%C3%BCber_Pfeile';
            beschreibung = 'Abbiegeanweisungen über Pfeile';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Anweisungen auf Pfeilen (eng. Turn Guidance / TG)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Anweisungen_auf_Pfeilen';
            beschreibung = 'Anweisungen auf Pfeilen (Turn Guidance)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Soft und Hard Turns':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Soft_und_Hard_Turns';
            beschreibung = 'Soft und Hard Turns';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Erstellen und bearbeiten eines Kreisverkehrs':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Erstellen_und_bearbeiten_eines_Kreisverkehrs';
            beschreibung = 'Erstellen und bearbeiten eines Kreisverkehrs';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Kreuzungsboxen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen';
            beschreibung = 'Kreuzungsboxen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Unterführungen und Brücken':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Unterf%C3%BChrungen_und_Br%C3%BCcken';
            beschreibung = 'Unterführungen und Brücken';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Anleitung zur Bearbeitung von deutschen Autobahnen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Anleitung_zum_Bearbeiten_von_deutschen_Autobahnen';
            beschreibung = 'Anleitung zur Bearbeitung von deutschen Autobahnen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Fußwege und Privatstraßen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Fu%C3%9Fwege_und_Privatstra%C3%9Fen';
            beschreibung = 'Fußwege und Privatstraßen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Segmentattribute':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Segmentattribute';
            beschreibung = 'Segmentattribute';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Straßensperrungen und zeitlich beschränkte Fahrverbote':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fensperrungen_und_zeitlich_beschr%C3%A4nkte_Fahrverbote';
            beschreibung = 'Straßensperrungen und zeitlich beschränkte Fahrverbote';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Spurassistent':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Spurassistent';
            beschreibung = 'Spurassistent';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Straßenbreite':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fenbreite';
            beschreibung = 'Straßenbreite';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Blitzer':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Blitzer_einpflegen';
            beschreibung = 'Blitzer';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Bahnübergänge':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Bahn%C3%BCberg%C3%A4nge';
            beschreibung = 'Bahnübergänge';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: WME Hausnummern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Hausnummern';
            beschreibung = 'WME Hausnummern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: WME Map Problems':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Map_Problems';
            beschreibung = 'WME Map Problems';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Verstreute Orte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Verstreute_Orte';
            beschreibung = 'Verstreute Orte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Base Map 1.0':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Base_Map_1.0';
            beschreibung = 'Base Map 1.0';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Die Server Bänke':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Die_Server_B%C3%A4nke';
            beschreibung = 'Die Server Bänke';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Wann stelle ich eine Frage im Forum':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wann_stelle_ich_eine_Frage_im_Forum';
            beschreibung = 'Wann stelle ich eine Frage im Forum';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Hilf mit Waze zu verbessern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Hilf_mit_Waze_zu_verbessern';
            beschreibung = 'Hilf mit Waze zu verbessern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Zeichne Straße auf':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Zeichne_Stra%C3%9Fe_auf';
            beschreibung = 'Zeichne Straße auf';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Die soziale Vernetzung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Die_soziale_Vernetzung';
            beschreibung = 'Die soziale Vernetzung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Die Waze Pendler Gruppen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Die_Waze_Pendler_Gruppen';
            beschreibung = 'Die Waze Pendler Gruppen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Der Waze Chat':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Der_Waze_Chat';
            beschreibung = 'Der Waze Chat';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: RSS Feeds':
            link = 'https://wazeopedia.waze.com/wiki/Germany/RSS_Feeds';
            beschreibung = 'RSS Feeds';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Feed List':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Feed_List';
            beschreibung = 'Feed List';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Straßennetz bearbeiten: Anleitung für Benutzer':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Anleitung_f%C3%BCr_Benutzer';
            beschreibung = 'Anleitung für Benutzer';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte';
            beschreibung = 'Orte und Navigationspunkte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Arten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#POI_Arten';
            beschreibung = 'POI Arten';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Arten: Punkt-POI':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Punkt-POI';
            beschreibung = 'Punkt-POI';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Arten: Flächen-POI':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Fl.C3.A4chen-POI';
            beschreibung = 'Flächen-POI';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#POI_Detailinformationen';
            beschreibung = 'POI Detailinformationen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Tab_Allgemein';
            beschreibung = 'POI Detailinformationen: Tab Allgemein';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Adresse':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Adresse';
            beschreibung = 'POI Detailinformationen: Tab Allgemein # Adresse';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Name':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Name';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Name';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Kategorie':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Kategorie';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Kategorie';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Beschreibung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Beschreibung';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Beschreibung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Einfahrten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Einfahrten';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Einfahrten';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Sperren':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Sperren';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Sperren';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Typ':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Typ';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Typ';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Allgemein # Externe Anbieter':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Externe_Anbieter';
            beschreibung = ' POI Detailinformationen: Tab Allgemein # Externe Anbieter';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Tab_Weitere_Informationen';
            beschreibung = 'POI Detailinformationen: Tab Weitere Informationen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Website':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Website';
            beschreibung = 'POI Detailinformationen: Tab Weitere Informationen # Website';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Telefon':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Telefon';
            beschreibung = 'POI Detailinformationen: Tab Weitere Informationen # Telefon';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Dienste / Services':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Dienste.2FServices_.28Services.29';
            beschreibung = 'POI Detailinformationen: Tab Weitere Informationen # Dienste / Services';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Weitere Informationen # Öffnungszeiten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#.C3.96ffnungszeiten';
            beschreibung = 'POI Detailinformationen: Tab Weitere Informationen # Öffnungszeiten';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Tab_Fotos';
            beschreibung = 'POI Detailinformationen: Tab Fotos';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos # Bestimmen von akzeptierbaren Fotos':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Bestimmen_von_akzeptierbaren_Fotos';
            beschreibung = 'POI Detailinformationen: Tab Fotos # Bestimmen von akzeptierbaren Fotos';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Detailinformationen: Tab Fotos # Ein Foto bei einem POI löschen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Ein_Foto_bei_einem_POI_l.C3.B6schen';
            beschreibung = 'POI Detailinformationen: Tab Fotos # Ein Foto bei einem POI löschen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#PUR_.28Place_Update_Request.29';
            beschreibung = 'PUR (Place Update Request)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): Neuer POI':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Neuer_POI';
            beschreibung = 'PUR (Place Update Request): Neuer POI';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): Neue POI-Detailinformationen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Neue_POI-Detailinformationen';
            beschreibung = 'PUR (Place Update Request): Neue POI-Detailinformationen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): Neues Foto':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Neues_Foto';
            beschreibung = 'PUR (Place Update Request): Neues Foto';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): POI wurde markiert':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#POI_wurde_markiert';
            beschreibung = 'PUR (Place Update Request): POI wurde markiert';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): Akzeptieren oder ablehnen?':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Akzeptieren_oder_ablehnen.3F';
            beschreibung = 'PUR (Place Update Request): Akzeptieren oder ablehnen?';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (Place Update Request): Doppelte Orte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Doppelte_Orte';
            beschreibung = 'PUR (Place Update Request): Doppelte Orte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: PUR (PLace Update Request): Private Orte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Private_Orte';
            beschreibung = 'PUR (PLace Update Request): Private Orte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: POI Update FAQ':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#POI_Update_FAQ';
            beschreibung = 'POI Update FAQ';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Einheitliche_Benennung_von_bestimmten_POI';
            beschreibung = 'Einheitliche Benennung von bestimmten POI';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI: Bahnhöfe':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Bahnh.C3.B6fe';
            beschreibung = 'Einheitliche Benennung von bestimmten POI: Bahnhöfe';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Einheitliche Benennung von bestimmten POI: U-Bahn Stationen/Haltestellen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#U-Bahn_Stationen_.2F_Haltestellen';
            beschreibung = 'Einheitliche Benennung von bestimmten POI: U-Bahn Stationen/Haltestellen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Die Kategorien':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Die_Kategorien';
            beschreibung = 'Die Kategorien';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Die Kategorien: Wann ist eine Fläche zu verwenden, wann ein Punkt?':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Wann_ist_eine_Fl.C3.A4che_zu_verwenden.2C_wann_ein_Punkt.3F';
            beschreibung = 'Die Kategorien: Wann ist eine Fläche zu verwenden, wann ein Punkt?';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Die Kategorien: Tabelle':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Tabelle:';
            beschreibung = 'Die Kategorien: Tabelle';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Die Kategorien: Geregelte Abweichungen von der Tabelle':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#Geregelte_Abweichungen_von_der_Tabelle:';
            beschreibung = 'Die Kategorien: Geregelte Abweichungen von der Tabelle';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Orte und Navigationspunkte: Die Kategorien: POI für die es keine eindeutig passende Kategorie gibt':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Orte_und_Navigationspunkte#POI_f.C3.BCr_die_es_keine_eindeutig_passende_Kategorie_gibt';
            beschreibung = 'Die Kategorien: POI für die es keine eindeutig passende Kategorie gibt';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Gemeindeliste Deutschland':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Gemeindeliste_Deutschland';
            beschreibung = 'Gemeindeliste Deutschland';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Gesamtliste Deutschland':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Gesamtliste_Deutschland';
            beschreibung = 'Gesamtliste Deutschland';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`)
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner';
            beschreibung = 'Rollen- & Ansprechpartner';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Allgemeines':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Allgemeines';
            beschreibung = 'Rollen- & Ansprechpartner: Allgemeines';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Communityrollen';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Coordinator':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Coordinator';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Coordinator';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Global Champ (GC)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Global_Champ_.28GC.29';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Globel Champ (GC)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Local Champ (LC)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Local_Champ_.28LC.29';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Local Champ (LC)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Weitere Rollen in der deutschen Waze-Community':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Weitere_Rollen_in_der_deutschen_Waze-Community';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Weitere Rollen in der deutschen Waze-Community';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Beta Leader':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Beta_Leader';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Beta Leader';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Editorrollen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Editorrollen';
            beschreibung = 'Rollen- & Ansprechpartner: Editorrollen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Country_Manager_.28CM.29';
            beschreibung = 'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM): Mentoren':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Mentoren';
            beschreibung = 'Rollen- & Ansprechpartner: Editorrollen: Country Manager (CM): Mentoren';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Editorrollen: Bundesland Manager (BM)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Bundesland_Manager_.28BM.29';
            beschreibung = 'Rollen- & Ansprechpartner: Editorrollen: Bundesland Manager (BM)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Editorrollen: Closure Manager':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Closure_Manager';
            beschreibung = 'Rollen- & Ansprechpartner: Editorrollen: Closure Manager';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Rollen- & Ansprechpartner: Communityrollen: Area Manager (AM)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Rollen-_%26_Ansprechpartner#Area_Manager_.28AM.29';
            beschreibung = 'Rollen- & Ansprechpartner: Communityrollen: Area Manager (AM)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Unser Community Discord Server':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Waze_Germany_Discord_Server';
            beschreibung = 'Unser Community Discord Server';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Diskussionsforum':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Diskussionsforum';
            beschreibung = 'Diskussionsforum';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Die Waze Pendler Gruppen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Die_Waze_Pendler_Gruppen';
            beschreibung = 'Die Waze Pendler Gruppen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Der Waze Chat':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Der_Waze_Chat';
            beschreibung = 'Der Waze Chat';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Routing';
            beschreibung = 'Routing';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert';
            beschreibung = 'Routing: Wie Waze routen kalkuliert';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Anfragen an den Routing Server':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Anfragen_an_den_Routing-Server';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Anfragen an den Routing Server';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Routenberechnung im Client':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Routenberechnung_im_Client';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Routenberechnung im Client';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Straßentypen und Kreuzungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Stra.C3.9Fentypen_und_Kreuzungen';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Straßentypen und Kreuzungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Zeit_und_Geschwindigkeit';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}).setURL(${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Standard-Geschwindigkeiten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Standard-Geschwindigkeiten';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Standard-Geschwindigkeiten';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Aktuelle Fahrgeschwindigkeiten':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Aktuelle_Fahrgeschwindigkeiten';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Zeit und Geschwindigkeit: Aktuelle Fahrgeschwindigkeiten';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Fernstreckennetz':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Fernstreckennetz';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Fernstreckennetz';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Zeitstrafen (Penalty-System)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Zeitstrafen_.28Penalty-System.29';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Zeitstrafen (Penalty-System)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Bearbeiten von Kreuzungen legt diese eindeutig fest':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Bearbeiten_von_Kreuzungen_legt_diese_eindeutig_fest';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Bearbeiten von Kreuzungen legt diese eindeutig fest';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Parkplatzstraßen (Parking-Lot-Road)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Parkplatzstra.C3.9Fen_.28Parking-Lot-Road.29';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Parkplatzstraßen (Parking-Lot-Road)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Verkehrsmeldungen';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen: Staumeldungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Wie_Waze_Routen_kalkuliert#Staumeldungen';
            beschreibung = 'Routing: Wie Waze routen kalkuliert: Verkehrsmeldungen: Staumeldungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
        case 'Routing: Fußwege und Privatstraßen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Fu%C3%9Fwege_und_Privatstra%C3%9Fen';
            beschreibung = 'Routing: Fußwege und Privatstraßen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
        case 'Routing: Kreuzungsboxen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen';
            beschreibung = 'Routing: Kreuzungsboxen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Kreuzungsboxen: Anlegen und Bearbeiten im WME':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen#Anlegen_und_Bearbeiten_im_WME';
            beschreibung = 'Routing: Kreuzungsboxen: Anlegen und Bearbeiten im WME';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Kreuzungsboxen: Funktionsweisen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen#Funktionsweisen';
            beschreibung = 'Routing: Kreuzungsboxen: Funktionsweisen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Kreuzungsboxen: Funktionsweisen: Beeinflussung des Routings (Paths)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen#Beeinflussung_des_Routings_.28Paths.29';
            beschreibung = 'Routing: Kreuzungsboxen: Funktionsweisen: Beeinflussung des Routings (Paths)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Kreuzungsboxen: Funktionsweisen: Setzen von Path-spezifischen Anweisungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen#Setzen_von_Path-spezifischen_Anweisungen';
            beschreibung = 'Routing: Kreuzungsboxen: Funktionsweisen: Setzen von Path-spezifischen Anweisungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Kreuzungsboxen: Funktionsweisen: Verbesserung der Datenerfassung für ETA-Berechnung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Kreuzungsboxen#Verbesserung_der_Datenerfassung_f.C3.BCr_ETA-Berechnung';
            beschreibung = 'Routing: Kreuzungsboxen: Funktionsweisen: Verbesserung der Datenerfassung für ETA-Berechnung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen';
            beschreibung = 'Routing: Echtzeitsperrungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Allgemeines':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Allgemeines';
            beschreibung = 'Routing: Echtzeitsperrungen: Allgemeines';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Verwendung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Verwendung';
            beschreibung = 'Routing: Echtzeitsperrungen: Verwendung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Verwendung: Anwendungsfälle':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Anwendungsf.C3.A4lle';
            beschreibung = 'Routing: Echtzeitsperrungen: Verwendung: Anwendungsfälle';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Verwendung: Fernrouting':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Fernrouting';
            beschreibung = 'Routing: Echtzeitsperrungen: Verwendung: Fernrouting';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Echtzeitsperrungen_im_WME';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Berechtigung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Berechtigung';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Berechtigung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Eintragung_im_WME';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Beschreibung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Beschreibung';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Beschreibung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Fahrtrichtung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Fahrtrichtung';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Fahrtrichtung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Datum und Uhrzeit':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Datum_und_Uhrzeit';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Datum und Uhrzeit';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Ereignis':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Ereignis';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Ereignis';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Speichern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Speichern';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Speichern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Kontrolle und Anzeige':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Kontrolle_und_Anzeige';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen im WME: Eintragung im WME: Kontrolle und Anzeige';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Besonderheiten im WME':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Besonderheiten_im_WME';
            beschreibung = 'Routing: Echtzeitsperrungen: Echtzeitsperrungen: Besonderheiten im WME';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Einschränkungen bei der Sperrdauer':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Einschr.C3.A4nkungen_bei_der_Sperrdauer';
            beschreibung = 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Einschränkungen bei der Sperrdauer';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Fehler beim Speichern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Fehler_beim_Speichern';
            beschreibung = 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Fehler beim Speichern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kreuzender Verkehr':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Kreuzender_Verkehr';
            beschreibung = 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kreuzender Verkehr';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kartenkommentar':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Kartenkommentar';
            beschreibung = 'Routing: Echtzeitsperrungen: Besonderheiten im WME: Kartenkommentar';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Änderung einer Sperrung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#.C3.84nderung_einer_Sperrung';
            beschreibung = 'Routing: Echtzeitsperrungen: Änderung einer Sperrung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Aufruf':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Aufruf';
            beschreibung = 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Aufruf';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Bearbeiten und Speichern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Bearbeiten_und_Speichern';
            beschreibung = 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Bearbeiten und Speichern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Segmenthistory':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Segmenthistory';
            beschreibung = 'Routing: Echtzeitsperrungen: Änderung einer Sperrung: Segmenthistory';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Löschen einer Sperrung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#L.C3.B6schen_einer_Sperrung';
            beschreibung = 'Routing: Echtzeitsperrungen: Löschen einer Sperrung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Tipps und Tricks/WME':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Tipps_und_Tricks.2FWME';
            beschreibung = 'Routing: Echtzeitsperrungen: Tipps und Tricks/WME';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Echtzeitsperrungen: Eintrag in der App':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Echtzeitsperrungen#Eintrag_in_der_App';
            beschreibung = 'Routing: Echtzeitsperrungen: Eintrag in der App';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Routing: Straßensperrungen und zeitlich beschränkte Fahrverbote':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fensperrungen_und_zeitlich_beschr%C3%A4nkte_Fahrverbote';
            beschreibung = 'Routing: Straßensperrungen und zeitlich beschränkte Fahrverbote';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Verkehrsereignisse anlegen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Verkehrsereignisse_anlegen';
            beschreibung = 'Verkehrsereignisse anlegen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Status des Kartenupdates':
            link = 'https://status.waze.com/';
            beschreibung = 'Status des Kartenupdates';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard';
            beschreibung = 'Mein Dashboard';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Link zum Dashboard':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Link_zum_Dashboard';
            beschreibung = 'Mein Dashboard: Link zum Dashboard';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Dashboard':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Dashboard';
            beschreibung = 'Mein Dashboard: Dashboard';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Dashboard: Dashboard (persönliche Profilseite)':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Dashboard_.28pers.C3.B6nliche_Profilseite.29';
            beschreibung = 'Mein Dashboard: Dashboard: Dashboard (persönliche Profilseite)';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Dashboard: Persönliche Details':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Pers.C3.B6nliche_Details';
            beschreibung = 'Mein Dashboard: Dashboard: Persönliche Details';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Dashboard: Persönliche Details: Facebook':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Facebook';
            beschreibung = 'Mein Dashboard: Dashboard: Persönliche Details: Facebook';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Mein Dashboard: Dashboard: Meine Fahrtenstatistik':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Mein_Dashboard#Meine_Fahrtenstatistik';
            beschreibung = 'Mein Dashboard: Dashboard: Meine Fahrtenstatistik';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Meldung erstellen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Meldung_erstellen';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Meldung erstellen';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Zur_Verf.C3.BCgung_stehende_Meldungen';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Stau':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Stau';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Stau';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kontrolle':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Kontrolle';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kontrolle';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Unfall':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Unfall';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Unfall';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Gefahr':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Gefahr';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Gefahr';
            docsEmbed.setTitle(`[${beschreibung}](${link})`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Map-Chat':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Map-Chat';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Map-Chat';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kartenfehler':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Kartenfehler';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Kartenfehler';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Ort':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Ort';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Ort';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Pannenhilfe':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Pannenhilfe';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Pannenhilfe';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Sperrung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Sperrung';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Zur Verfügung stehende Meldungen: Sperrung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Points and limits':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Points_and_limits';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Points and limits';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Meldungen erstellen: Impact to routing':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Meldungen_erstellen#Impact_to_routing';
            beschreibung = 'Funktionen der Waze App: Meldungen erstellen: Impact to routing';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Straßen mit der Waze App aufzeichnen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Stra%C3%9Fen_mit_der_Waze_App_aufzeichnen';
            beschreibung = 'Funktionen der Waze App: Straßen mit der Waze App aufzeichnen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Funktionen der Waze App: Suchcodes':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Suchcodes';
            beschreibung = 'Funktionen der Waze App: Suchcodes';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Waze Blog':
            link = 'https://medium.com/waze';
            beschreibung = 'Waze Blog';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung';
            beschreibung = 'Einführung in die Kartenbearbeitung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Einleitung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Einleitung';
            beschreibung = 'Einführung in die Kartenbearbeitung: Einleitung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: ':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Hauptziele';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: Benutzerfreundlichkeit':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Benutzerfreundlichkeit';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: Benutzerfreundlichkeit';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: Einfachheit':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Einfachheit';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: Einfachheit';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: Korrekte Routenführung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Korrekte_Routenf.C3.BChrung';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: Korrekte Routenführung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: Erhaltung des bestehenden Zustandes':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Erhaltung_des_bestehenden_Zustandes';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: Erhaltung des bestehenden Zustandes';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: Unnötige Kreuzungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Unn.C3.B6tige_Kreuzungen';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: Unnötige Kreuzungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Hauptziele: End-Kreuzung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#End-Kreuzung';
            beschreibung = 'Einführung in die Kartenbearbeitung: Hauptziele: End-Kreuzung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#In_der_Praxis';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis: Empfohlene Reihenfolge der Arbeitsschritte':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Empfohlene_Reihenfolge_der_Arbeitsschritte';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis: Empfohlene Reihenfolge der Arbeitsschritte';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis: Autobahnen und Anschlüsse':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Autobahnen_und_Anschl.C3.BCsse';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis: Autobahnen und Anschlüsse';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis: Wann sind Ramps an Kreuzungen zu verwenden':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Wann_sind_Ramps_an_Kreuzungen_zu_verwenden';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis: Wann sind Ramps an Kreuzungen zu verwenden';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis: Wann ein Kreisverkehr erstellt werden soll':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Wann_ein_Kreisverkehr_erstellt_werden_soll';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis: Wann ein Kreisverkehr erstellt werden soll';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: In der Praxis: Richtung und Sperren von Straßen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Richtung_und_Sperren_von_Stra.C3.9Fen';
            beschreibung = 'Einführung in die Kartenbearbeitung: In der Praxis: Richtung und Sperren von Straßen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Parkings_und_Parkpl.C3.A4tze';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Gebrauch des "Parkplatz"-Straßentyps':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Gebrauch_des_.22Parkplatz.22-Stra.C3.9Fentyps';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Gebrauch des "Parkplatz"-Straßentyps';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Einkaufszentren':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Einkaufszentren';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Einkaufszentren';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Kleinere Parkplätze':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Kleinere_Parkpl.C3.A4tze';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Kleinere Parkplätze';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Durchfahrts-Parkplätze':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Durchfahrts-Parkpl.C3.A4tze';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Durchfahrts-Parkplätze';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Parkhäuser':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Parkh.C3.A4user';
            beschreibung = 'Einführung in die Kartenbearbeitung: Parkings und Parkplätze: Parkhäuser';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Verkehrsberuhigter Bereich':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Verkehrsberuhigter_Bereich';
            beschreibung = 'Einführung in die Kartenbearbeitung: Verkehrsberuhigter Bereich';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Unterdrücken von Verkehrsmeldungen und Kartenfehlern':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Unterdr.C3.BCcken_von_Verkehrsmeldungen_und_Kartenfehlern';
            beschreibung = 'Einführung in die Kartenbearbeitung: Unterdrücken von Verkehrsmeldungen und Kartenfehlern';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'Einführung in die Kartenbearbeitung: Klassifizierung von Kreuzungen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/Einf%C3%BChrung_in_die_Kartenbearbeitung#Klassifizierung_von_Kreuzungen';
            beschreibung = 'Einführung in die Kartenbearbeitung: Klassifizierung von Kreuzungen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung';
            beschreibung = 'WME Schnellstart-Anleitung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Einleitung':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Einleitung';
            beschreibung = 'WME Schnellstart-Anleitung: Einleitung';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Anmeldung im Karteneditor':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Anmeldung_im_Karteneditor';
            beschreibung = 'WME Schnellstart-Anleitung: Anmeldung im Karteneditor';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Gebräuchliche Funktionen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Gebr.C3.A4uchliche_Funktionen';
            beschreibung = 'WME Schnellstart-Anleitung: Gebräuchliche Funktionen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Tips_und_Tricks';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie-Punkte schnell entfernen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Geometrie-Punkte_schnell_entfernen';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie-Punkte schnell entfernen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Straßen ohne Namen und Stadt erfassen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Stra.C3.9Fen_ohne_Namen_und_Stadt_erfassen';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Straßen ohne Namen und Stadt erfassen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie Änderungen bei Mehrfach-Auswahl':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Geometrie_.C3.84nderungen_bei_Mehrfach-Auswahl';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Geometrie Änderungen bei Mehrfach-Auswahl';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Bearbeiten von Kreuzungen legt diese eindeutig fest':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Bearbeiten_von_Kreuzungen_legt_diese_eindeutig_fest';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Bearbeiten von Kreuzungen legt diese eindeutig fest';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Verschieben von Segmenten über die Grenze des Möglichen':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Verschieben_von_Segmenten_.C3.BCber_die_Grenze_des_M.C3.B6glichen';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Verschieben von Segmenten über die Grenze des Möglichen';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Städte-Polygone':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#St.C3.A4dte-Polygone';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Städte-Polygone';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
        case 'WME Schnellstart-Anleitung: Tips und Tricks: Blitzer':
            link = 'https://wazeopedia.waze.com/wiki/Germany/WME_Schnellstart-Anleitung#Blitzer';
            beschreibung = 'WME Schnellstart-Anleitung: Tips und Tricks: Blitzer';
            docsEmbed.setTitle(`Wazeopedia: ${beschreibung}`).setURL(`${link}`);
            interaction.reply({ embeds: [docsEmbed] });
            break;
    }
}
