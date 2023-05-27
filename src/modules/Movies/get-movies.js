// imports
const database = require('../../../db/database')
const toPagination = require('to-pagination')

const GetMovies = async (req, res) => {
    const { movie_name, page_number } = req.query

    if (movie_name && page_number) {
        try {
            const movies = await database.query(`SELECT * FROM movie_posts WHERE name LIKE '%${movie_name.split("'").join('"')}%' `)
            const result = await toPagination(movies.rows, page_number, 15)
            res.status(200).send(result)
        } catch (e) {
            console.log(e)
        }
    } else if (page_number) {
        const movies = await database.query(`SELECT * FROM movie_posts`)
        const result = await toPagination(movies.rows, page_number, 15)
        res.status(200).send(result)
    } else {
        res.status(400).send({
            message: "Don't send page_number in params!"
        })
    }
}

module.exports = GetMovies