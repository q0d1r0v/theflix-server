// imports
const database = require('../../../db/database')
const bcrypt = require('bcrypt')
const register_key_word = "$2a$12$dBGbfLM2qDnBM52DZoN01.HaVsWX8i654QzXc6.UOtKc8oabgvA6O"

const Register = async (req, res) => {
    const { key_word, full_name, username, password } = req.body

    if (key_word === register_key_word && full_name && username && password) {
        const users = await database.query(`SELECT * FROM users WHERE username = '${username.split("'").join('"')}'`)
        const is_auth = users.rows.length === 0
        if (is_auth) {
            const hashedPassword = await bcrypt.hash(password, 10)
            await database.query(`INSERT INTO users(full_name, username, password) VALUES ('${full_name.split("'").join('"')}','${username.split("'").join('"')}', '${hashedPassword}')`)
            res.status(200).send({
                message: "User created!"
            })
        } else {
            res.status(400).send({
                message: "We have this user!"
            })
        }
    } else {
        res.status(400).send({
            message: "You don't send full data!"
        })
    }
}

module.exports = Register