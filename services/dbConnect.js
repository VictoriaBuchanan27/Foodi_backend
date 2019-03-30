const pgp = require('pg-promise')({});
const connectionString = 'postgres://localhost/foodi';
const db = pgp(connectionString);

module.exports = {
    db
}