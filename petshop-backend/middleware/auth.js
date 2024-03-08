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
        const decoded = jwt.verify(token, 'c745591d85d098fd97f38f7760c48435');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
        console.log(err)
    }
};

module.exports = auth;