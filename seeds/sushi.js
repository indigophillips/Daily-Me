exports.seed = (knex, Promise) {
// Deletes ALL existing entries
  return knex('sushi').del()
    .then(function () {
      // Inserts seed entries
      return knex('sushi').insert([
        {id: 1, fish: '', },
        {id: 2, fish: '', },
        {id: 3, fish: '', }
      ]);
    });
};
