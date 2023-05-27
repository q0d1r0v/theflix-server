// imports
const database = require('../../../db/database')

const DeleteUser = async (req, res) => {
    const { user_id } = req.query

    if (user_id) {
        try {
            await database.query(`DELETE FROM users WHERE id = '${user_id}'`)
            res.status(200).send({
                message: "User deleted!"
            })
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "You don't send full data!"
        })
    }
    console.log()
}

module.exports = DeleteUser