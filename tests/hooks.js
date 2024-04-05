import db from '../db/index.js'

export const mochaHooks = {
  async afterAll() {
    await db.destroy()
  }
}
