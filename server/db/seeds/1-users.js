exports.seed = function (knex) {
  return knex('teams').insert([
    {
      id: 0,
      team_name: 'unsigned',
      description: 'Placeholder team for unsigned players',
      date_established: '2030',
      indicited_for: 'Environmental degradation',
    },
    {
      id: 1,
      team_name: 'Backstreet Boys',
      description:
        'A once famous music group known for cheesy love songs and male sex appeal',
      date_established: '1993',
      indicited_for:
        'The degradation of popular music and failing to act on climate change',
    },
  ])
}
