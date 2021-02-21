const { getObjectId } = require('mongo-seeding')

const names = ['Nicklas', 'Jakob', 'Lovisa', 'Erik', 'Lotta', 'Isak', 'Lina', 'Linda', 'Amanda', 'Karl']
const min = 18
const max = 100

module.exports = names.map(name => ({
  username: name,
  longitud: Math.floor(Math.random() * (max - min + 1)) + min,
  latitud: Math.floor(Math.random() * (max - min + 1)) + min,
  locationWater: 'Vättern',
  locationCity: 'Jönköping',
  species: 'Abborre',
  weight: 1.9,
  length: 50,
  imageUrl: `http://image.com/${name}`,
  timeOfCatch: Date.now(),
  _id: getObjectId(name)
}))
