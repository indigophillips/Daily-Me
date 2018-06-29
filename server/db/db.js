const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask
}

function getTasks (testDb) {
  const db = testDb || knex
  return db('tasks').select()
}

function addTask (task, testDb) {
  const db = testDb || knex
  return db('tasks')
    .insert(task)
}

function editTask (task, testDb) {
  const db = testDb || knex
  return db('tasks')
    .where('id', task.id).update(task)
}

function deleteTask (id, testDb) {
  const db = testDb || knex
  return db('tasks')
    .where('id', id).del()
}
