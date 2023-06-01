// imports
const jwt = require('jsonwebtoken')

const ReturnUser = async (req, res) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1]

        if(token) {
            const user = await jwt.verify(token, process.env.JWT_SECRET_KEY)

            delete user.password
            delete user.iat
            delete user.exp

            res.status(200).send(user)
        } else {
            res.status(400).send({
                message: "Please send token in headers!"
            })
        }
    } catch(e) {
        console.log(e)
    }
}

module.exports = ReturnUser