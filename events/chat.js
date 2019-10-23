module.exports = (client, event) => {
    var jsonMsg = JSON.parse(event.message).extra
    
    if(!jsonMsg) return;
    jsonMsg = jsonMsg[0].text

    let username = jsonMsg.match(/<[A-z]+?>/)

    if (!username) return;
    if (!username[0].includes('<')) return;
    let sentMsg = jsonMsg.replace(username[0], '')
    username = username[0].replace('<', '').replace('>', '')
    if (username === client.username) return;

    client.write('chat', {
        message: sentMsg
    });
}