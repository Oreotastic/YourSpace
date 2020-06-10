const client = require('../client').client
const bcrypt = require('bcrypt')

module.exports = {
  getUsers: async() => {
    const sql = `SELECT * FROM users`
    const response = await client.query(sql)
    return response.rows
  },
  getUserById: async(id) => {
    const sql = `SELECT * FROM users WHERE id = $1 returning *`
    const response = await client.query(sql, [id])
    return response.rows[0]
  },
  getUserByUsername: async(username) => {
    const sql = `SELECT * FROM users WHERE username = $1 returning *`
    const response = await client.query(sql, [username])
    return response.rows[0]
  },
  signIn: async(username, hash) => {
  
  }
}