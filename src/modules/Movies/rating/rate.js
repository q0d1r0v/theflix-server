// imports
const database = require('../../../../db/database')

const Rate = async (req, res) => {
    try {
        const { like, unlike, movie_post_id } = req.body
        if (like && movie_post_id) {
            const rate_value = await database.query(`SELECT rating FROM movie_posts WHERE id = '${movie_post_id}'`)
            if (rate_value.rows.length > 0) {
                let r_value = ~~rate_value.rows[0].rating

                await database.query(`UPDATE movie_posts SET rating = '${++r_value}' WHERE id = '${movie_post_id}'`)

                res.status(200).send({
                    message: "Thank you for your rate!"
                })
            } else {
                res.status(400).send({
                    message: "We don't have this post!"
                })
            }
        } else if (unlike && movie_post_id) {
            const rate_value = await database.query(`SELECT rating FROM movie_posts WHERE id = '${movie_post_id}'`)
            if (rate_value.rows.length > 0) {
                let r_value = ~~rate_value.rows[0].rating

                if (r_value > 0) {
                    await database.query(`UPDATE movie_posts SET rating = '${--r_value}' WHERE id = '${movie_post_id}'`)

                    res.status(200).send({
                        message: "Thank you for your rate!"
                    })
                } else {
                    res.status(200).send({
                        message: "Thank you for your rate!"
                    })
                }
            } else {
                res.status(400).send({
                    message: "We don't have this post!"
                })
            }
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = Rate