const testEnv = require('../test-environment')

const db = require('../../server/db/db.js')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getTasks gets all tasks', () => {
  const expected = 1
  return db.getTasks(testDb)
    .then(res => {
      console.log(res)
      const actual = res.length
      expect(actual).toBe(expected)
    })
})
