var jwt = require('jsonwebtoken');
const JWT_SECRET = "hdkjvdhdvsjsvdl11246676jnj"

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        res.status(401).json({allow:'false', error: "Please authenticatekar using a valid token" })
    }   
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user.id;
        // req.user= {id:data.userId};
        next();
    } catch (error) {
        res.status(401).json({allow:'false', error: "Please authenticatena using a valid token" })
    }

}


module.exports = fetchuser;