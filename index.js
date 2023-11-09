require('dotenv').config

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/adarsh', (req, res) => {
    res.send('Hello Adarsh!')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
  })

  app.get('/youtube', (req, res) => {
    res.send('Hello in am youtube')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})