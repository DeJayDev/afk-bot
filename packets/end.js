module.exports = (client, event) => {
    console.log('Bot > Connection Lost!')
    throw new Error(event)
}