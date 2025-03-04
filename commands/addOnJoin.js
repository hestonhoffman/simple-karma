// Require functions
const db = require('../functions/database')
const reply = require('../functions/reply')

module.exports = {
  name: 'addOnJoin',
  description: 'Creates a new thing when user joins server',
  async execute (member, pointsName) {
    const thingName = '@' + member.displayName
    // const regex = new RegExp(member.displayName, 'i')

    // check if the database already has the thing
    const res = await db.findOne(member.guild.id, thingName)
    const foundThing = res[0]

    // debug
    console.log('  DEBUG: 2. addOnJoin.js, foundThing: ' + foundThing)

    // if it does, send reply to the massage's channel explaining so
    if (foundThing) {
      reply.thingAlreadyExistsOnJoin(member, foundThing, pointsName)
      // if it doesn't, create the thing then send reply to the message's channel confirming it's creation
    } else {
      const newThing = await db.create(member.guild.id, thingName, 0)
      if (newThing) {
        reply.thingCreatedOnJoin(member, newThing)
        // if the creation fails, send reply to the message's channel explaining so
      } else {
        reply.thingNotCreatedOnJoin(member, thingName)
      }
    }
  }
}
