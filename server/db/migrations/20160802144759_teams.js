exports.up = (knex) => {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id').primary()
    table.string('team_name')
    table.string('description')
    table.string('date_established')
    table.string('indicted_for')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('teams')
}
