const List = require('../model/Dolist')

exports.dolist = async (req, res) => {
    try {
        const {tanggal, list} = req.body

    const dolist = await new List({
        tanggal: tanggal,
        list: list
    }).save()
    res.status(200).json({
        msg:'successfully update list',
        list: dolist
    })
    } catch (error) {
        res.status(500).json({
            msg: 'internal server error'
        })
    }
}