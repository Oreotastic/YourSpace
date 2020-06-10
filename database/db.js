//Database Methods 
const client = require('./client').client
const users = require('./methods/users')

const sync = async() => {
  const sql = `

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    DROP TABLE IF EXISTS users;

    CREATE TABLE users(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      googleID VARCHAR UNIQUE,
      facebookID VARCHAR UNIQUE,
      name VARCHAR,
      hash VARCHAR,
      role VARCHAR
    );

    INSERT INTO users(name, hash, role) VALUES('AdminHunt', 'admin123abc', 'ADMIN');
  `
  
  await client.query(sql)
}

module.exports = {
  sync,
  users
}