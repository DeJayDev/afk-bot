var config = require('../config.json')

module.exports = (client, packet) => {
    var jsonMsg = JSON.parse(packet.message).extra

    if (!jsonMsg) return;
    jsonMsg = jsonMsg[0].text

    let username = jsonMsg.match(/<[A-z]+?>/)

    if (!username) return;
    if (!username[0].includes('<')) return;
    let sentMsg = jsonMsg.replace(username[0], '').trim();
    username = username[0].replace('<', '').replace('>', '')
    if (username === client.username) return

    console.log(sentMsg)

    switch (sentMsg) {
        case client.username:
            client.write('chat', {message: 'I am a bot.'});
            break;
        case config.prefix + 'pos':
            client.write('chat', {message: 'he do not sing'});
        default:
            break;
    }
}
