// imports
const path = require('path')

const IndexModule = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../docs/docs.html'), (err) => {
            if(err) throw err

            console.log("Docs file is sended!")
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = IndexModule