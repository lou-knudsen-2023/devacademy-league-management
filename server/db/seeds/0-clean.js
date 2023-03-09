exports.seed = (knex) => {
  return knex('players')
    .del()
    .then(() => {
      return knex('teams').del()
    })
}
