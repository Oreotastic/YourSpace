const pg = require('pg');
const keys = require('../config/keys');

const pgConnection = keys.conString.connecion;
const client = new pg.Client(pgConnection);

//connects to database
client.connect()

module.exports = {
  client
}