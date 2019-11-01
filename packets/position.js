module.exports = (client, packet) => {
    let position = {
        x: packet.x,
        y: packet.y,
        z: packet.z,
        yaw: packet.yaw,
        pitch: packet.pitch,
        flags: packet.flags,
        reason: packet.teleportId
    }

    console.log('x: ' + packet.x)
    console.log('y: ' + packet.y)
    console.log('z: ' + packet.z)
    console.log('yaw: ' + packet.yaw)
    console.log('pitch: ' + packet.pitch)
    console.log('flags: ' + packet.flags)
    console.log('reason: ' + packet.teleportId)
}