const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/foodi');

module.exports = {
    db,
}