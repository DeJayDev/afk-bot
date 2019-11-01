module.exports = (client, packet) => {
    console.log('Bot > Caught an error!')
    throw new Error(packet)
}