module.exports = (client, error, message) => {

    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Bip bop! HATA!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Bip bop! HATA!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Bip bop! HATA!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Bir şeyler yanlış gitti... Hata : ${error}`);
    };

};
