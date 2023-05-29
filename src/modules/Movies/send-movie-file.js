// imports
const path = require('path')

const SendMovieFile = (req, res) => {
    try {
        const { file_name } = req.query
        if (file_name) {
            res.sendFile(path.join(__dirname, `../../movies/${file_name}`),)
        } else {
            res.status(400).send({
                message: "Don't send file name in params!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = SendMovieFile