// imports
const database = require('../../../db/database')

const CreateMovie = async (req, res) => {
    try {
        const movie_file_name = req.files.movie[0].filename
        const cover_image_file_name = req.files.cover_image[0].filename
        const { name, country, movie_date, category_id, language, duration, rating, trailer } = req.body

        if (movie_file_name && cover_image_file_name && country && movie_date && category_id && language && duration && rating && trailer) {
            const category_name = await database.query(`SELECT name FROM categories WHERE id = ${category_id}`)
            await database.query(`INSERT INTO movie_posts(name, country, movie_date, category_name, language, duration, movie_file_name, cover_image_file_name, trailer, rating) VALUES ('${name.split("'").join('"')}','${country.split("'").join('"')}', '${movie_date.split("'").join('"')}', '${category_name.rows[0].name.split("'").join('"')}', '${language.split("'").join('"')}', '${duration.split("'").join('"')}', '${movie_file_name.split("'").join('"')}', '${cover_image_file_name.split("'").join('"')}', '${trailer.split("'").join('"')}', '${rating.split("'").join('"')}')`)
            res.status(200).send({
                message: "Post is created!"
            })
        } else {
            res.status(400).send({
                message: "You don't send full data for create movie post!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = CreateMovie