module.exports = (client, packet) => {
    console.log('Bot > Connection Lost!')
    throw new Error(packet)
}