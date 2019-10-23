var config = require('./config.json')
var fs = require("fs")

var mc = require('minecraft-protocol')
var client = mc.createClient({
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
})

fs.readdir('./events/', (err, evtFile) => {
  if (err) throw new Error("Somehow... Events doesn't exist.")
  console.log('Loading: ')
  evtFile.forEach(file => {
    const eventName = file.split(".")[0]
    console.log(`* ${eventName}`.replace('.js', ''))
    const event = require(`./events/${file}`)
    client.on(eventName, event.bind(this, client))
  })
})