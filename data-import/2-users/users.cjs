const { getObjectId } = require('mongo-seeding')

const firstNames = [
  'Nicklas',
  'Jakob',
  'Jens',
  'Erik',
  'Jenny',
  'Ulf',
  'Lina',
  'Linda',
  'Amanda',
  'Karl'
]
const lastNames = [
  'Karlsson',
  'Hansson',
  'Petersson',
  'Knutsson',
  'Svensson',
  'Gustavsson',
  'Andersson',
  'Ulfsson',
  'Kurtsson',
  'Ingesson'
]

module.exports = firstNames.map((name, index) => ({
  firstName: name,
  lastName: lastNames[index],
  email: `${name.toLowerCase()}@test.com`,
  password: `12345678`
}))
