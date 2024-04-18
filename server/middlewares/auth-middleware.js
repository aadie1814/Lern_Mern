const jwt = require('jsonwebtoken')
const user = require('../models/userSchema')
const verifyToken = async (req, res, next)=> {
    let token = req.headers['authorization'];
     /* console.log(token)  */
    if(!token){
        return res.status(400).json({msg:'A token is required for authorization'})
    }
    try{
        /* if token is present,try to remove'Bearer' prefix(common practice) */
        if(token.startsWith('Bearer ')){
           /*  remove Bearer from string */
            token =token.slice(7, token.length);
            console.log(token)
        }
       /*  verify the token */
       const isVerified =jwt.verify(token,process.env.JWT_SECRET_KEY)
       const data = await user.findOne({_id: isVerified.id})
       /* attach the decoaded user to the request oject */
       req.user = data
       /* proocess to the next middleware/function */
       next();
    }
    catch(error){
        res.status(400).json({msg:'invaid Token'})
    }
    
}
module.exports = verifyToken