import db from '../db/index.js'

class User {
  static async findAll(limit = 201) {
    const query = `
      select id, username, firstName, lastName, email, avatar 
      from users LIMIT ?
    `
    const results = await db.raw(query, [limit])
    return results
  }

  static async findById(id) {

    const query = `
    SELECT id, username, firstName, lastName, email, avatar 
    FROM users WHERE id = ?
    `

    const results = await db.raw(query, [id])
    return results[0]
  }

  static async createUser(username, firstName, lastName, email, avatar, password) {

    const query = `
    INSERT INTO users(username, firstName, lastName, email, avatar, password) 
    VALUES (?, ?, ?, ?, ?, ?)
    `
    await db.raw(query, [username, firstName, lastName, email, avatar, password])
  }


  static async deleteUser(id) {

    const query = `
    DELETE FROM users 
    WHERE id = ?
    `
    const results = await db.raw(query, id)
    return results[0]
  }

  static async findByUsername(username) {
    const query = `
    SELECT id, username, firstName, lastName, email, avatar 
    FROM users WHERE username = ?
    `

    const results = await db.raw(query, [id])
    return results[0]
  }

  static async loginUser(username, password) {
    const query = `
    SELECT username, password
    FROM users 
    WHERE username = ?
    `
    const results = await db.raw(query, [username])
    return results[0]
  }

}


export default User
