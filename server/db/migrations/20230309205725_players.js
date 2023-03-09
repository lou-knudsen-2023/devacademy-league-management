/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.integer('team_id').references('teams.id')
    table.string('name')
    table.string('biography')
    table.integer('age')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('players')
}
