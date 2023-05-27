const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'theflix_db',
    password: '123',
    port: 5432
})

pool.connect((err) => {
    if(err) throw err
    console.log("Connected to db!")
})

module.exports = pool