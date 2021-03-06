//Database Methods 
const client = require('./client').client
const login = require('./methods/login')
const users = require('./methods/users')

const sync = async() => {
  const sql = `

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    DROP TABLE IF EXISTS users;

    CREATE TABLE users(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      googleID VARCHAR UNIQUE,
      facebookID VARCHAR UNIQUE,
      username VARCHAR UNIQUE NOT NULL,
      firstName VARCHAR,
      lastName VARCHAR,
      hash VARCHAR,
      role VARCHAR DEFAULT 'USER'
    );
  `

  await client.query(sql)
  await login.signUp({
    username: 'AdminHunt',
    firstName: 'Hunter',
    lastName: 'Oreair',
    password: 'password',
    role: 'ADMIN'
  })
}

module.exports = {
  sync,
  login,
  users
}