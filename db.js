/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);
process.env.PGPASSWORD = "myPassword"

client.connect();

module.exports = client;
