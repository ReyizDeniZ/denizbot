module.exports = (client, message, track) => {

    message.channel.send(`${client.emotes.music} - Şimdiki parçamız ${track.title}...`);

};