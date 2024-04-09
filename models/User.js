import db from '../db/index.js'

class User {
  static async findAll() {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users
    `
    const results = await db.raw(query)
    return results
  }

  static async findById(id) {
    /**
     * TODO: finish this method
     */
  }
}

export default User
