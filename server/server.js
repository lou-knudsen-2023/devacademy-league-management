const express = require('express')
const hbs = require('express-handlebars')
const db = require('./db/db.js')
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
  return db.getTeams().then((teams) => {
    const obj = {
      teams,
    }
    res.render('league_home', obj)
  })
})

server.get('/:id/team', (req, res) => {
  const id = Number(req.params.id)
  const data = {}
  return db
    .getTeam(id)
    .then((team) => {
      data.team = team
    })
    .then(() => {
      return db.getPlayersByTeam(data.team.id)
    })
    .then((players) => {
      data.players = players
      console.log(data)
      res.render('team', data)
    })
})
//pass to team view the team, array of players for that team
module.exports = server
