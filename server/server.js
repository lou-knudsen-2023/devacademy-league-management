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
  db.getTeams()
    .then((teams) => {
      const obj = {
        teams,
      }
      res.render('league_home', obj)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})

server.get('/:id/team', (req, res) => {
  const id = Number(req.params.id)
  const data = {}
  db.getTeam(id)
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
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})

server.get('/:id/team/edit', (req, res) => {
  const id = Number(req.params.id)
  Promise.all([db.getPlayersByTeam(id), db.getUnsignedPlayers()])
    .then(([team_players, unsigned_players]) => {
      res.render('player_management', { team_players, unsigned_players })
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})

server.post('/:id/team/edit', (req, res) => {
  let { released, signed } = req.body
  const teamId = Number(req.params.id)
  if (!Array.isArray(released)) {
    released = [released]
  }
  if (!Array.isArray(signed)) {
    signed = [signed]
  }
  released = released.map((id) => Number(id))
  signed = signed.map((id) => Number(id))
  Promise.all([
    db.removePlayersFromTeam(released),
    db.addPlayersToTeam(signed, teamId),
  ])
    .then(() => {
      res.redirect(`/${teamId}/team`)
    })
    .catch((err) => {
      console.log(err.message)
      res.status(500).send('Something went wrong')
    })
})
//pass to team view the team, array of players for that team
module.exports = server

// const incomingData = {
//   id: Number(req.params.id),
//   newTeam: req.body.signed,
//   removeId: req.body.released,
// }
