const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('User', Userschema)