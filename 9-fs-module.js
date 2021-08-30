const { readFileSync, writeFileSync } = require('fs')
console.log("start")
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' }

)
console.log('done with this task')

console.log('starting the next one')
//If the file is already there, then all the contents will get overwritten and if not then a new file is created.
//{flag:'a'} appends the contents to the files 