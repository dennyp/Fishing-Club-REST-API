const { getObjectId } = require('mongo-seeding')

const users = [
  'nicklas@test.com',
  'jakob@test.com',
  'jens@test.com',
  'erik@test.com',
  'jenny@test.com',
  'ulf@test.com',
  'lina@test.com',
  'linda@test.com',
  'amanda@test.com',
  'karl@test.com'
]
const min = 18
const max = 100

module.exports = users.map((user) => ({
  user: getObjectId(user),
  longitude: Math.floor(Math.random() * (max - min + 1)) + min,
  latitude: Math.floor(Math.random() * (max - min + 1)) + min,
  locationWater: 'Vättern',
  locationCity: 'Jönköping',
  species: 'Abborre',
  weight: 1.9,
  length: 50,
  imageUrl: `http://image.com/${user}.jpg`,
  timeOfCatch: Date.now(),
}))
