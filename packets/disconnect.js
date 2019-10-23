module.exports = (client, event) => {
    console.log('Bot > Disconnected! Reason: ' + event.reason)
    throw new Error(event)
}