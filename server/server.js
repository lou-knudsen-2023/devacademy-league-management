const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.get('/', (req, res) => {
    res.render('league_home')
})

server.use('/', userRoutes) //----Ryan this is where the routes will go

module.exports = server
