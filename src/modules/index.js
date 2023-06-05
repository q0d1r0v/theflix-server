// imports
const path = require('path')

const IndexModule = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../docs/docs.html'), (err) => {
            if(err) throw err
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = IndexModule