module.exports = (client, event) => {
    if(event.health <= 0) {
        client.write('client_command', { payload: 0 })
    } 

    if(event.food <= 15) {
        client.write('use_item', {hand: 0})
    }

    console.log('Bot > HIT! Food: ' + event.food + ', Health: ' + event.health)
}