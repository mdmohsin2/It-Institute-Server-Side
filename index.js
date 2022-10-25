const express = require('express')
const app = express()
const port = 5000

const course = require('./data.json')


app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.get('/allcourse', (req, res) => {
    res.send(course)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })