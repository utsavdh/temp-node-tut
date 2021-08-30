//CommomJS - every file is module (by default)
//Modules - encapsulate code (only share minimum)


const name = require('./4-names')
console.log(name)

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')

console.log(data)

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)