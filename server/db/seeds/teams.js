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
        'The degradation of popular music, failing to act on climate change',
    },
    {
      id: 2,
      team_name: 'Teletubbies',
      description: 'Colourful childrens television series featuring astronaut',
      date_established: '1997',
      indicted_for:
        'Recursive promotion of television, failing to act on climate change',
    },
    {
      id: 3,
      team_name: 'The Simpsons',
      description:
        'Yellow television family known for socially irresponsible antics',
      date_established: '1989',
      indicted_for:
        'Dangerous nuclear energy generation, drunk and disorderly, failing to act on climate change',
    },
  ])
}
