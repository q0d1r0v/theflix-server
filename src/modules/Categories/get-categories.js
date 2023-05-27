// imports
const database = require('../../../db/database')
const toPagination = require('to-pagination')

const GetCategories = async (req, res) => {
    const { page_number } = req.query
    if (page_number) {
        try {
            const categories = await database.query('SELECT * FROM categories')
            console.log(categories.rows)
            const categories_with_pagination = await toPagination(categories.rows, page_number, 10)

            res.status(200).send(categories_with_pagination)
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "You don't send category id for delete category!"
        })
    }
}

module.exports = GetCategories