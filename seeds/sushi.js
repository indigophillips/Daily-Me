exports.seed = (knex, Promise) => {
// Deletes ALL existing entries
  return knex('sushi').del()
    .then(function () {
      // Inserts seed entries
      return knex('sushi').insert([
        {id: 1, fish: 'uni', rice: 'white', price: 5, availability: true},
        {id: 2, fish: 'toro', rice: 'white', price: 4, availability: true},
        {id: 3, fish: 'ikura', rice: 'brown', price: 3, availability: true}
      ])
    })
}
