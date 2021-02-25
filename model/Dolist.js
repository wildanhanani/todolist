const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    Tanggal: {type: Date},
    list: {type: String}
})

module.exports = mongoose.model('List', ListSchema)