const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  allSushi,
  getSushi,
  newSushi,
  editSushi,
  deleteSushi
}

function allSushi () {
  const db = knex
  return db('sushi').select()
}

function getSushi (id) {
  const db = knex
  return db('sushi')
    .where('id', id).select()
}

function newSushi (sushi) {
  const db = knex
  return db('sushi').insert(sushi)
}

function editSushi (sushi) {
  const db = knex
  return db('sushi')
    .where('id', sushi.id).update(sushi)
}

function deleteSushi (id) {
  const db = knex
  return db('sushi')
    .where('id', id).del()
}
