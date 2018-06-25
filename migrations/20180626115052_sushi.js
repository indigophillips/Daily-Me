exports.up = (knex, Promise) => {
  return knex.schema.createTable('sushi', table => {
    table.increments('id').primary()
    table.string('fish')
    table.string('rice')
    table.integer('price')
    table.boolean('availability')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('sushi')
}
