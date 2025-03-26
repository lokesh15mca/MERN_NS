const jwt = require('jsonwebtoken');
function verifyToken(token){
    return new Promise(function(resolve, reject){
        const sec = "Lokesh"
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded); 
    })
})
}
async function auth(req, res, next){
    const bearerToken = req.headers.authorization;
    
    if(!bearerToken || !bearerToken.startWith('Bearer '))
    {
        return res.status(400).send({message: "Please provide a brear tokan"})
    }
    const token = bearerToken.split(" ")[1];
    const decoded = await verifyToken(token);
        req.user = decoded.user; // Attach user to the request object for further use
        return next();
}

module.exports = auth;