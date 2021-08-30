//OS Modules
// provides useful properties and methods for interacting with the OS as well as server

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)