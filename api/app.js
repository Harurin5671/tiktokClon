require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, Accept-Encoding, redirect'
  )
  next()
})
const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`la app esta corriendo en el puerto ${port}`)
})

dbConnect()
