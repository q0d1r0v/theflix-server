// imports
const path = require('path')

const SendMovieFile = (req, res) => {
    const { file_name } = req.query
    if (file_name) {
        try {
            res.sendFile(path.join(__dirname, `../../movies/${file_name}`),)
        } catch (e) {
            console.log(e)
        }
    } else {
        res.status(400).send({
            message: "Don't send file name in params!"
        })
    }
}

module.exports = SendMovieFile