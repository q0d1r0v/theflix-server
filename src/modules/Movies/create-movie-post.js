// imports
const database = require('../../../db/database')

const CreateMovie = async (req, res) => {
    const file_name = req.file?.filename
    const { name, country, movie_date, category_id, language, duration, rating } = req.body

    if (file_name && country && movie_date && category_id && language && duration && rating) {
        try {
            const category_name = await database.query(`SELECT name FROM categories WHERE id = ${category_id}`)
            await database.query(`INSERT INTO movie_posts(name, country, movie_date, category_name, language, duration, file_name, rating) VALUES ('${name.split("'").join('"')}','${country.split("'").join('"')}', '${movie_date.split("'").join('"')}', '${category_name.rows[0].name.split("'").join('"')}', '${language.split("'").join('"')}', '${duration.split("'").join('"')}', '${file_name.split("'").join('"')}', '${rating.split("'").join('"')}')`)
            res.status(200).send({
                message: "Post is created!"
            })
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "You don't send full data for create movie post!"
        })
    }
}

module.exports = CreateMovie