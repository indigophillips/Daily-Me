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
      const actual = res.length
      expect(actual).toBe(expected)
    })
})

test('addTask adds new task', () => {
  const expected = 1
  const task = {task: 'poo'}
  return db.addTask(task, testDb)
    .then(res => {
      const actual = res.length
      expect(actual).toBe(expected)
    })
})

test('editTask edits an existing task', () => {
  const expected = 1
  const task = {id: 1, task: 'poo'}
  return db.editTask(task, testDb)
    .then(res => {
      const actual = res
      expect(actual).toBe(expected)
    })
})

test('deleteTask deletes an existing task', () => {
  const expected = 0
  const gh = {id: 1}
  return db.deleteTask(gh, testDb)
    .then(res => {
      const actual = res
      expect(actual).toBe(expected)
    })
})
