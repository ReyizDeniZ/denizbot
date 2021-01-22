module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Bip bop! HATA! Hiç bir şey çalmıyor.`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Ses kanalına bağlanılamadı!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Ses kanalına bağlanılamadı!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Bir şeyler yanlış gitti... Hata : ${error}`);
    };

};
