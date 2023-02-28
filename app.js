/* =======================
    LOAD THE DEPENDENCIES
==========================*/
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

/* =======================
    LOAD THE CONFIG
==========================*/
const port = process.env.PORT || 8088

/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express()

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// index page, just for testing
app.get('/', (req, res) => {
    res.send('Api is running')
})

// configure api router
app.use('/api', require('./api/router'))

// open the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})
