exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: 'Yardım paneli' },
            footer: { text: 'Bu alan napim diyenlerin götünü siktiğim yerdir.' },
            fields: [
                { name: 'Bot', value: '`ping`, `discord`, `hava`, `avatar`, `yaz`, `sil`, `emoji`, `youtube`, `sifreuret`'},
                { name: 'Müzik', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `w-filters`' },
                { name: 'Filtreler', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
            ],
            timestamp: new Date(),
            description: `Filtre kullanmak için, ${client.config.prefix}filter (filtre). Örnek : ${client.config.prefix}filter 8D.`,
        },
    });

};
