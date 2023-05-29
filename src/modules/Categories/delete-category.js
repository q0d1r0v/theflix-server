// imports
const database = require('../../../db/database')

const DeleteCategory = async (req, res) => {
    try {
        const { category_id } = req.query
        if (category_id) {
            await database.query(`DELETE FROM categories WHERE id = '${category_id}'`)
            res.status(200).send({
                message: "Category is deleted!"
            })
        } else {
            res.status(400).send({
                message: "You don't send category id for delete category!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = DeleteCategory