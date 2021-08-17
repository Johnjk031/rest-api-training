const express = require('express')
const app = express()
const port = 8080;

const alphabet = [
    {id: 1, name: 'Alpha'},
    {id: 2, name: 'Beta'},
    {id: 3, name: 'Gamma'}

]

app.get('/', (req, res ) => {
    res.send('hello world')
})

app.get('/api/alphabet', (req, res) => {
    res.send(alphabet)
})


app.get('/api/alphabet/:id', (req, res) => {
   const alpha = alphabet.find(a => a.id === parseInt(req.params.id));
   if (!alpha) res.status(404).send('Letter not found')
   res.send(alpha)
})


app.listen(port, () => console.log(`http://localhost:${port}/`))