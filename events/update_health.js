module.exports = (client, event) => {
    if(event.health <= 0) {
        client.write('client_command', { payload: 0 })
    } 

    if(event.food <= 15) {
        client.write('chat', {
            message: 'Bot > Eating. Hunger is: ' + event.food
        });
        client.write('use_item', {hand: 0})
    }

    /*if (bot.health <= 0) {
        bot.isAlive = false
        bot.emit('death')
        bot._client.write('client_command', { payload: 0 })
      } else if (bot.health > 0 && !bot.isAlive) {
        bot.isAlive = true
        bot.emit('spawn')
    }*/

    console.log('Bot > HIT! Food: ' + event.food + ', Health: ' + event.health)
}