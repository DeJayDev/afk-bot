module.exports = (client, event) => {
    console.log('Bot > Caught an error!')
    throw new Error(event)
}