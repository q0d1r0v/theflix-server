// database
const database = require('../../../../db/database')

const GetTopMovies = async (req, res) => {
    try {
        const top_movies = await database.query(`SELECT * FROM movie_posts ORDER BY rating`)
        if(top_movies.rows.length > 0) {
            const top_ten = top_movies.rows.reverse().splice(0, 10)

            res.status(200).send(top_ten)
        } else {
            res.status(200).send({
                message: "We don't have top movies!"
            })
        }
    }catch(e) {
        console.log(e)
    }
}

module.exports = GetTopMovies