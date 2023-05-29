// imports
const database = require('../../../db/database')
const fs = require('fs')
const path = require('path')

const DeleteMoviePost = async (req, res) => {
    try {
        const { post_id } = req.query

        if (post_id) {
            const folder_dir_name = path.join(__dirname, '../../movies/')
            const post = await database.query(`SELECT * FROM movie_posts WHERE id = '${post_id}'`)

            if (post.rows.length > 0) {
                // delete file
                fs.unlink(folder_dir_name + post.rows[0].file_name, async (err) => {
                    if (err) throw err
                    await database.query(`DELETE FROM movie_posts WHERE id = '${post_id}'`)

                    res.status(200).send({
                        message: "Movie post is deleted!"
                    })
                })
            } else {
                res.status(400).send({
                    message: "We don't have this file!"
                })
            }
        } else {
            res.status(400).send({
                message: "Don't send post id in params!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = DeleteMoviePost