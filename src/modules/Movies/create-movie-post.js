// imports
const database = require('../../../db/database')

const CreateMovie = (req, res) => {
    const file_name = req.file?.filename
    const { country, movie_date, category_id, language, duration, rating } = req.body

    if (file_name && country && movie_date && category_id && language && duration && rating) {
        console.log('success')
    } else {
        res.status(400).send({
            message: "You don't send full data for create movie post!"
        })
    }
}

module.exports = CreateMovie