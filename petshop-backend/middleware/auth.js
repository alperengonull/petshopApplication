const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Get token from the header
    const bearerHeader = req.header('Authorization');
    if (!bearerHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    const token = bearerHeader.split(' ')[1];
    // Verify token
    try {
        const decoded = jwt.verify(token, '35b3c9d83f56223ba9bf1e5e50e19c59');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
        console.log(err)
    }
};

module.exports = auth;