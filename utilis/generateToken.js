// const jwt = require('jsonwebtoken')

// const generateToken = (res, userId) =>{
//          const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME}, {})



//          res.cookie('jwt', token,{
//                   httpOnly: true,
//                   sameSite:'strict',
//                   maxAge: 30* 60* 60* 1000,


//          })
// }
// module.exports = generateToken;