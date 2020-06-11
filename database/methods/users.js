const client = require('../client').client

module.exports = {
  getUsers: async() => {
    const sql = `SELECT * FROM users`
    const response = await client.query(sql)
    return response.rows
  },
  getUserById: async(id) => {
    const sql = `SELECT * FROM users WHERE id = $1`
    const response = await client.query(sql, [id])
    return response.rows[0]
  },
  getUserByUsername: async(username) => {
    const sql = `SELECT * FROM users WHERE username = $1`
    const response = await client.query(sql, [username])
    return response.rows[0]
  },
  createUser: async(user, hash) => {
    const sql = `INSERT INTO users(username, facebookID, googleID, name, hash, role) VALUES ($1, $2, $3, $4, $5, $6) returning *`
    const response = await client.query(sql, [user.username, user.googleID, user.facebookID, user.name, hash, user.role])
    return response.rows[0]
  }
}