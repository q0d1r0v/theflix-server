const IndexModule = (req, res) => {
    try {
        res.send({
            message: "This is docs page"
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = IndexModule