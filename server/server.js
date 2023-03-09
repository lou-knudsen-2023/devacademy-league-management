const express = require('express')
const hbs = require('express-handlebars')

// const userRoutes = require('./routes/users')

const server = express()

// Middleware
server.use(express.static(__dirname + '/public'))
server.use(express.urlencoded({ extended: true }))

// server.use('/players', userRoutes) //----Ryan this is where the routes will go

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes
server.get('/', (req, res) => {
    res.render('league_home')
})


module.exports = server
