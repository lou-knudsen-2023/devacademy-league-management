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
  const expected = 3
  return db
    .getTeams(testDb)
    .then((teams) => {
      const actual = teams.length
      expect(actual).toBe(expected)
    })
    .catch((err) => expect(err).toBeNull())
})

test('getTeam gets a single team', () => {
  const expected = 'test user 1'
  return db
    .getUser(99901, testDb)
    .then((user) => {
      const actual = user.name
      expect(actual).toBe(expected)
    })
    .catch((err) => expect(err).toBeNull())
})
