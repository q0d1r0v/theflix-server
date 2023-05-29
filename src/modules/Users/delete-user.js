// imports
const database = require('../../../db/database')

const DeleteUser = async (req, res) => {
    try {
        const { user_id } = req.query

        if (user_id) {
            await database.query(`DELETE FROM users WHERE id = '${user_id}'`)
            res.status(200).send({
                message: "User deleted!"
            })
        } else {
            res.status(400).send({
                message: "You don't send full data!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = DeleteUser