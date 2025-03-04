// Require functions
const reply = require('../functions/reply')

module.exports = {
  name: 'noThing',
  description: 'Replies that command does not include a thing',
  execute (message, debugLog, debugFlag) {
    reply.noThing(message)

    // if debugFlag, DM debug
    if (debugFlag) {
      message.author.send([
        debugLog
      ])
    }
  }
}
