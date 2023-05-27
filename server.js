// imports
const express = require('express')
const cors = require('cors')

// global env config
require('dotenv').config()

// server
const server = express()

// import router
const router = require('./src/routes/router')

// use server
server.use(cors())
server.use(express.json())

// data
const port = process.env.PORT || 3000

// routes
server.use('/', router)

// listen server
server.listen(port, (err) => {
    if(err) throw err

    console.log(`Server is running on port ${port}`)
})