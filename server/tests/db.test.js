/* eslint-disable jest/no-conditional-expect */
const testEnv = require('./test-environment')
const db = require('../db/db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getTeams gets all teams', () => {
  // One for each letter of the alphabet!
  return db
    .getTeams(testDb)
    .then((teams) => {
      expect(teams).toHaveLength(3)
    })
    .catch((err) => expect(err).toBeNull())
})

test('getTeam gets a single team', () => {
  const expected = {
    id: 1,
    team_name: 'Backstreet Boys',
    description:
      'A once famous music group known for cheesy love songs and male sex appeal',
    date_established: '1993',
    indicted_for:
      'The degradation of popular music, failing to act on climate change',
  }
  return db
    .getTeam(1, testDb)
    .then((team) => {
      expect(team).toEqual(expected)
    })
    .catch((err) => expect(err).toBeNull())
})

test('getPlayers gets all players', () => {
  return db.getPlayers(testDb).then((players) => {
    expect(players).toHaveLength(15)
  })
})

test('getPlayer gets asingle player with the name of their team', () => {
  const expected = {
    id: 8,
    team_id: 2,
    name: 'Po',
    biography: 'Red',
    age: 7,
    team_name: 'Teletubbies',
  }
  return db.getPlayer(8, testDb).then((player) => {
    expect(player).toEqual(expected)
  })
})

test('getPlayersByTeam gets all players from one team', () => {
  const expected = [
    { id: 5, team_id: 2, name: 'Tinky Winky', biography: 'Purple', age: 5 },
    { id: 6, team_id: 2, name: 'Dipsy', biography: 'Green', age: 6 },
    { id: 7, team_id: 2, name: 'Laa-Laa', biography: 'Yellow', age: 5 },
    { id: 8, team_id: 2, name: 'Po', biography: 'Red', age: 7 },
    {
      id: 9,
      team_id: 2,
      name: 'Sun Baby',
      biography:
        'The Teletubbies are an animisitc culture, the Sun Baby is their personification of The Sun',
      age: 1,
    },
  ]
  return db.getPlayersByTeam(2, testDb).then((players) => {
    expect(players).toEqual(expected)
  })
})

test("addPlayerToTeam sets a player's team_id correctly", () => {
  return db.addPlayerToTeam(12, 2, testDb).then(([{ team_id }]) => {
    expect(team_id).toBe(2)
  })
})

test("removePlayerFromTeam sets a player's team_id to 0", () => {
  return db
    .removePlayerFromTeam(12, testDb)
    .then(() => db.getPlayer(12, testDb))
    .then((player) => {
      expect(player.team_id).toBe(0)
    })
})
