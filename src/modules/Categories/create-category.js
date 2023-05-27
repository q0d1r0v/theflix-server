// imports
const database = require('../../../db/database')

const CreateCategory = async (req, res) => {
    const { name, key } = req.body

    if (name && key) {
        try {
            await database.query(`INSERT INTO categories(name, key) VALUES ('${name.split("'").join('"')}', '${key.split("'").join('"')}')`)

            res.status(200).send({
                message: "Category created!"
            })
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "You don't send full data!"
        })
    }
}

module.exports = CreateCategory