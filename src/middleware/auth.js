// imports
const database = require('../../db/database')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        const token = authorization.split('Bearer ')[1]
        const user = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        const is_user = await database.query(`SELECT * FROM users WHERE username = '${user.username.split("'").join('"')}'`)

        // check to verify with database
        if (is_user.rows.length !== 0) {
            next()
        } else {
            res.status(401).send({
                message: "Unauthorized!"
            })
        }

    } catch (e) {
        res.status(401).send({
            message: "Unauthorized!"
        })
    }
}

module.exports = auth