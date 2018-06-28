exports.seed = (knex, Promise) => {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, task: 'Buy new running shoes'}
      ])
    })
}
