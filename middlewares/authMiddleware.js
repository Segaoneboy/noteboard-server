const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    try {
        const token = req.cookies.accessToken

        if (!token) {
            return res.status(401).json({ message: `Access denied. No token provided. ${token}` });
        }

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: `Invalid or expired token. ${err}` });
    }
};
