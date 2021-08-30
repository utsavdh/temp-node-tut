const { readFile, writeFile } = require('fs');
console.log("start")
// CallbackHell

readFile('./content/first.txt', 'utf8', (err, result) => {
    console.log("Result1", result)
    if (err) {
        console.log(err)
        return
    }


    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        console.log("Result2", result)
        if (err) {
            console.log(err)
            return
        }
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result:${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("done with this task")
            }

        )
    })
})

console.log("starting next task")