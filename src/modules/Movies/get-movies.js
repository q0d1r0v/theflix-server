// imports
const database = require('../../../db/database')
const toPagination = require('to-pagination')

const GetMovies = async (req, res) => {
    try {
        const { movie_name, page_number } = req.query

        if (movie_name && page_number) {
            const movies = await database.query(`SELECT * FROM movie_posts WHERE name LIKE '%${movie_name.split("'").join('"')}%' ORDER BY name`)
            if (movies.rows.length > 0) {
                const result = await toPagination(movies.rows, page_number, 15)
                res.status(200).send(result)
            } else {
                const result = await toPagination([1], page_number, 15)
                result.data = []
                res.status(200).send(result)
            }
        } else if (page_number) {
            const movies = await database.query(`SELECT * FROM movie_posts`)
            if (movies.rows.length > 0) {
                const result = await toPagination(movies.rows, page_number, 15)
                res.status(200).send(result)
            } else {
                const result = await toPagination([1], page_number, 15)
                result.data = []
                res.status(200).send(result)
            }
        } else {
            res.status(400).send({
                message: "Don't send page_number in params!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = GetMovies