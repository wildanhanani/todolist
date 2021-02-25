const JWT = require('jsonwebtoken')
// const User = require('../model/User')
const JWTsecret = 'dhai1iw9'

exports.isUser = async (req, res, next) =>{
    const headerAuth = req.headers.authorization;

    if (!headerAuth) {
      return res.status(401).json({
        error: "please provide a valid token",
      });
    }
    const token = headerAuth.split(" ")[1]; 

    const decode = JWT.verify(token, JWTsecret);
    req.id = decode.id;
    next();
  
}