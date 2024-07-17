const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../var_env.env') })

const authToken = process.env.AUTH_TOKEN;

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization') ? req.header('Authorization').replace('Bearer ', '') : req.headers['authorization']
    if (token == null) return res.sendStatus(401); 
    if (token !== authToken) {
        return res.sendStatus(403); 
    }

    next(); 
};

module.exports = { authenticateToken }; // nhớ export =))