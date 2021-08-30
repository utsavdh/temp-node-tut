const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our homepage');
    }

    if (req.url === '/about') {
        res.end("here is our short history")
    }
    res.end(`<h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for.</p>
        <a href="/">Back home</a>`
    )
})

server.listen(5000)