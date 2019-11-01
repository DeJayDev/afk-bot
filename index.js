var config = require('./config.json')
var fs = require("fs")

var mc = require('minecraft-protocol')
var client = mc.createClient({
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
})

// Client wide variables.
client.position = '';

fs.readdir('./packets/', (err, files) => {
  if (err) throw new Error("No packets to load.")
  console.log('Loading: ')
  files.forEach(file => {
    const packetName = file.split(".")[0]
    console.log(`* ${packetName}`.replace('.js', ''))
    const packet = require(`./packets/${file}`)
    client.on(packetName, packet.bind(this, client))
  })
})
