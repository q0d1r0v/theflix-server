// imports
const database = require('../../../db/database')

const UpdateCategory = async (req, res) => {
    const { category_id, new_name, new_key } = req.query
    console.log(req.query)
    if (category_id && new_name && new_key) {
        try {
            await database.query(`UPDATE categories SET name = '${new_name.split("'").join('"')}', key = '${new_key.split("'").join('"')}' WHERE id = '${category_id}'`)
            res.status(200).send({
                message: "Category is updated!"
            })
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "You don't send full data for update category!"
        })
    }
}

module.exports = UpdateCategory