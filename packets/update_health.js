module.exports = (client, packet) => {
    if(packet.health <= 0) {
        client.write('client_command', { payload: 0 })
    } 

    if(packet.food <= 15) {
        client.write('use_item', {hand: 0})
    }

    console.log('Bot > HIT! Food: ' + packet.food + ', Health: ' + packet.health)
}