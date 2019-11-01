module.exports = (client, packet) => {
    console.log('Bot > Disconnected! Reason: ' + packet.reason)
    throw new Error(packet)
}