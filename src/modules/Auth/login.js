// imports
const database = require('../../../db/database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (username && password) {
            const is_username = await database.query(`SELECT * FROM users WHERE username = '${username.split("'").join('"')}'`)
            const is_true_username = is_username.rows.length !== 0

            if (is_true_username) {
                const is_true_password = await bcrypt.compare(password, is_username.rows[0].password)

                if (is_true_password) {
                    const token = await jwt.sign(is_username.rows[0], process.env.JWT_SECRET_KEY, {
                        expiresIn: '24h'
                    })
                    res.status(200).send({
                        access_token: token
                    })
                } else {
                    res.status(400).send({
                        message: "Incorrect username or password!"
                    })
                }
            } else {
                res.status(400).send({
                    message: "Incorrect username or password!"
                })
            }

        } else {
            res.status(400).send({
                message: "You don't send full data!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = Login