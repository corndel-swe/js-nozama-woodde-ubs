import { faker } from '@faker-js/faker'
import connect from '../db/index.js'

const createFakeUser = () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.userName({ firstName, lastName }),
    password: faker.internet.password(),
    avatar: faker.image.avatar()
  }
}

async function insertFakeUsers(n) {
  const db = connect()
  const fakeUsers = new Array(n).fill(null).map(createFakeUser)

  try {
    await db.batchInsert('users', fakeUsers, 100)
  } finally {
    db.destroy()
  }
}

export default insertFakeUsers
