const jwt = require('jsonwebtoken');
module.exports = (req, res, next)=>{
    // console.log(req.headers.authorization.split(" ")[1]);
    
    try{
        const token = req.headers.authorization.split(" ")[1]
        const verify = jwt.verify(token, 'SBS SMS');
        // console.log(token);
        next();
    }
    catch(err){
        return res.status(301).json({
            msg: "invalid token"
        })
    }
}