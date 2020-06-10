const client = require('../client').client

module.exports = {
  getUsers: async() => {
    const sql = `SELECT * FROM users`
    const response = await client.query(sql)
    return response.rows
  },
  getUser: async(id) => {
    const sql = `SELECT * FROM users WHERE id = $1 returning *`
    const response = await client.query(sql, [id])
    return response.rows[0]
  }
}