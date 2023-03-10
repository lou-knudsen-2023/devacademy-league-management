const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTeams,
  getTeam,
  getPlayers,
  getPlayer,
  getPlayersByTeam,
  addPlayersToTeam,
  removePlayersFromTeam,
  getUnsignedPlayers,
}

function getPlayers(db = connection) {
  return db('players').select()
}

// Join with team so we can display team name
function getPlayer(id, db = connection) {
  return db('players')
    .where('players.id', id)
    .first('players.*', 'teams.team_name') // Is this line valid?
    .join('teams', 'teams.id', 'team_id')
}

function getPlayersByTeam(team_id, db = connection) {
  return db('players').where({ team_id }).select()
}

function getTeams(db = connection) {
  return db('teams').select().where('id', '>', 0)
}

function getTeam(id, db = connection) {
  return db('teams').where('id', id).first()
}

function addPlayersToTeam(playerIds, newTeamId, db = connection) {
  return db('players')
    .whereIn('id', playerIds)
    .update({ team_id: newTeamId }, ['name', 'team_id'])
}

function removePlayersFromTeam(id, db = connection) {
  return addPlayersToTeam(id, 0, db)
}

function getUnsignedPlayers(db = connection) {
  return getPlayersByTeam(0, db)
}
