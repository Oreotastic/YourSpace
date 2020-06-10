const bcrypt = require('bcrypt')

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
      username VARCHAR UNIQUE NOT NULL,
      name VARCHAR,
      hash VARCHAR NOT NULL,
      role VARCHAR NOT NULL
    );

    INSERT INTO users(username, name, hash, role) VALUES('AdminHunt', 'Hunter', '$2b$10$TmdFSSBNAno5gPBw930KPuMI1JBRPX59OdZW3pg5U1QpSy1Jw8qsK', 'ADMIN');
  `
  
  await client.query(sql)
}

const hashPassword = async(password) => {
  const saltRounds = 10
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        return hash
    });
  });
}

module.exports = {
  sync,
  users
}