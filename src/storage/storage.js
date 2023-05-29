// imports
const multer = require('multer')
const path = require('path')

// config of upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            if (file.fieldname === 'movie') {
                cb(null, path.join(__dirname, '../movies/'))
            } else if (file.fieldname === 'cover_image') {
                cb(null, path.join(__dirname, '../static/movie-cover-images/'))
            }
        } catch (e) {
            console.log(e)
        }
    },
    filename: (req, file, cb) => {
        try {
            if (file.fieldname === 'movie') {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4')
            } else if (file.fieldname === 'cover_image') {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
            }
        } catch (e) {
            console.log(e)
        }
    }
})

const uploads = multer({ storage: storage }).fields([
    {
        name: 'movie',
        maxCount: 1
    },
    {
        name: 'cover_image',
        maxCount: 1
    }
])

module.exports = uploads