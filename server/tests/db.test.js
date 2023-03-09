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
      expect(teams).toHaveLength(4)
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
