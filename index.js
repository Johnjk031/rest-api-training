const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res ) => {
    res.send('hello world')
})

app.get('/api/numbers', (req, res) => {
    res.send(['alfa', 'beta', 'gamma', 'delta'])
})

app.listen(port, () => console.log(`http://localhost:${port}/`))