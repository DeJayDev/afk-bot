var config = require('./config.json')
var fs = require("fs")

var mc = require('minecraft-protocol')
var client = mc.createClient({
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
})

fs.readdir('./packets/', (err, evtFile) => {
  if (err) throw new Error("No packets to load.")
  console.log('Loading: ')
  evtFile.forEach(file => {
    const eventName = file.split(".")[0]
    console.log(`* ${eventName}`.replace('.js', ''))
    const event = require(`./packets/${file}`)
    client.on(eventName, event.bind(this, client))
  })
})