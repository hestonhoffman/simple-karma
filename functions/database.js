// Require Mongoose Model for Things
const Thing = require('../models/thing')
const Server = require('../models/server')

// Create find object
const databaseObj = {}

// FIND ONE THING
databaseObj.findOne = async function (server, thingName) {
  // check if the database has the thing
  const foundThing = await Thing.findOne({ server: server, nameLower: thingName.toLowerCase() }).exec()

  // debug
  const debugDB = `
  === findOne in Database ===
  DEBUG: 1a. database.js, thingName: ${thingName.toLowerCase()}
  DEBUG: 1b. database.js, foundThing: ${foundThing}`
  console.log(debugDB)

  // if it does, return the thing
  if (foundThing) {
    return [foundThing, debugDB]
    // if it doesn't, return null
  } else {
    return [null, debugDB]
  }
}

// FIND THINGS
databaseObj.find = async function (server, char) {
  const regex = new RegExp(char, 'g')
  // Search the database for things with names containing with the character
  const foundThings = await Thing.find({ server: server, nameLower: regex })

  // debug
  const debugDB = `
  === find in Database ===
  DEBUG: 1. database.js, foundThings: ${foundThings.length}`
  console.log(debugDB)

  // if success, return the things
  if (foundThings) {
    return [foundThings, debugDB]
    // if not, return null
  } else {
    return [null, debugDB]
  }
}

// FIND BEST
databaseObj.findBest = async function (server) {
  // Search the database for best five karma
  const foundThings = await Thing.find({ server: server }).sort({ karma: -1 }).limit(5)

  // debug
  const debugDB = `
  === find best five in Database ===
  DEBUG: 1. database.js, foundThings: ${foundThings}`
  console.log(debugDB)

  // if success, return the things
  if (foundThings) {
    return [foundThings, debugDB]
    // if not, return null
  } else {
    return [null, debugDB]
  }
}

// FIND WORST
databaseObj.findWorst = async function (server) {
  // Search the database for worst five karma
  const foundThings = await Thing.find({ server: server }).sort({ karma: 1 }).limit(5)

  // debug
  const debugDB = `
  === find worst five in Database ===
  DEBUG: 1. database.js, foundThings: ${foundThings}`
  console.log(debugDB)

  // if success, return the things
  if (foundThings) {
    return [foundThings, debugDB]
    // if not, return null
  } else {
    return [null, debugDB]
  }
}

// FIND POINTSNAME
databaseObj.findPointsName = async function (messageID) {
  const server = await Server.findOne({ ID: messageID }).exec()

  // debug
  const debugDB = `
  === findPointsName in Database ===
  DEBUG: 1. database.js, server: ${server}`
  console.log(debugDB)

  // if it does, return the thing
  if (server) {
    return [server.pointsName, debugDB]
    // if it doesn't, return null
  } else {
    return [null, debugDB]
  }
}

// CREATE THING
databaseObj.create = async function (server, thingName, karma) {
  const newThing = await Thing.create({ server: server, name: thingName, nameLower: thingName.toLowerCase(), karma: karma })

  // if it creation is successful, return the thing
  if (newThing) {
    return newThing
    // if the creation fails, return null
  } else {
    return null
  }
}

// DELETE THING
databaseObj.deleteOne = async function (server, thingName) {
  const res = await Thing.deleteOne({ server: server, name: thingName })

  // debug
  const debugDB = `
  === deleteOne from Database ===
  DEBUG: 1. database.js, res: ${res.ok}`
  console.log(debugDB)

  return [res.ok, debugDB]
}

// FIND SERVER
databaseObj.findServer = async function (id) {
  // check if the database has the thing
  const foundServer = await Server.findOne({ ID: id }).exec()

  // debug
  const debugDB = `
  === findServer in Database ===
  DEBUG: 1. database.js, foundServer: ${foundServer}`
  console.log(debugDB)

  // if it does, return the thing
  if (foundServer) {
    return [foundServer, debugDB]
    // if it doesn't, return null
  } else {
    return [null, debugDB]
  }
}

// CREATE SERVER
databaseObj.createServer = async function (id, pointsName) {
  const newServer = await Server.create({ ID: id, pointsName: pointsName })

  // if it creation is successful, return the thing
  if (newServer) {
    return newServer
    // if the creation fails, return null
  } else {
    return null
  }
}

//  Export find object
module.exports = databaseObj
