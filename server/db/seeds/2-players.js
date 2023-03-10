exports.seed = function (knex) {
  return knex('players').insert([
    {
      id: 0,
      team_id: 1,
      name: 'Nick Carter',
      biography: 'Singing, otherwise unnotable',
      age: 50,
    },
    {
      id: 1,
      team_id: 1,
      name: 'Howie Dorough',
      biography: 'Singing, otherwise unnotable',
      age: 56,
    },
    {
      id: 2,
      team_id: 1,
      name: 'AJ McLean',
      biography: 'Singing, otherwise unnotable',
      age: 52,
    },
    {
      id: 3,
      team_id: 1,
      name: 'Brian Littrell',
      biography: 'Singing, otherwise unnotable',
      age: 55,
    },
    {
      id: 4,
      team_id: 1,
      name: 'Kevin Richardson',
      biography: 'Singing, otherwise unnotable',
      age: 58,
    },
    { id: 5, team_id: 2, name: 'Tinky Winky', biography: 'Purple', age: 5 },
    { id: 6, team_id: 2, name: 'Dipsy', biography: 'Green', age: 6 },
    { id: 7, team_id: 2, name: 'Laa-Laa', biography: 'Yellow', age: 5 },
    { id: 8, team_id: 2, name: 'Po', biography: 'Red', age: 7 },
    {
      id: 9,
      team_id: 2,
      name: 'Sun Baby',
      biography:
        'The Teletubbies are an animisitc culture, the Sun Baby is their personification of The Sun',
      age: 1,
    },
    {
      id: 10,
      team_id: 3,
      name: 'Homer Simpson',
      biography:
        'A father known for his detached parenting style and negligence in his job overseeing nuclear plant operations',
      age: 40,
    },
    {
      id: 11,
      team_id: 3,
      name: 'Lisa Simpson',
      biography:
        'The conscientious daughter, highly intelligent, highly ineffectual',
      age: 8,
    },
    {
      id: 12,
      team_id: 3,
      name: 'Marge Simpson',
      biography: 'A capable mother with an otherwise carefree attitude',
      age: 34,
    },
    {
      id: 13,
      team_id: 3,
      name: 'Bart Simpson',
      biography:
        'A rebellious son who encourages his detractors to not have cows and to masticate with his shorts',
      age: 10,
    },
    {
      id: 14,
      team_id: 3,
      name: 'Maggie Simpson',
      biography: 'A baby, known for her love of her pacifier',
      age: 0,
    },
    {
      id: 15,
      team_id: 0,
      name: 'Sleve McDichael',
      biography:
        'Once responded to "There is no I in team" with "But there is in Win"',
      age: 18,
    },
    {
      id: 16,
      team_id: 0,
      name: 'Onson Sweemey',
      biography: 'Purchaser of bottled water',
      age: 32,
    },
    {
      id: 17,
      team_id: 0,
      name: 'Darryl Archideld',
      biography: 'Spotted reading The Art of Not Giving a F**k',
      age: 23,
    },
    {
      id: 18,
      team_id: 0,
      name: 'Anatoli Smorin',
      biography: 'Autarky activist',
      age: 25,
    },
    {
      id: 19,
      team_id: 0,
      name: 'Rey Mcsriff',
      biography: "Didn't see the point in composting",
      age: 53,
    },
  ])
}
