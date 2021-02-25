const JWT = require('jsonwebtoken')
const JWTsecret = 'dhai1iw9'
const User = require('../model/User')

exports.login = async(req, res) => {
    try {
        const {username, password} = req.body
    const findUser = await User.findOne({username:username})
    if(!findUser){
        res.status(400).json({
            msg:'username not found'
        })
    }
    const token = JWT.sign({_id:findUser._id},JWTsecret, {expiresIn:'24h'} )
    res.status(200).json({
        msg: 'login succes',
        token: token
    })  
    } catch (error) {
        res.status(500).json({
            msg: 'internal server error'
        })
    }
}