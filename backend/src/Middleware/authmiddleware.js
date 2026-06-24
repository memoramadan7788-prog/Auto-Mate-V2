const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // 1. Get the token from the Authorization header (Format: Bearer <token>)
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 2. Verify the token using your secret key
    // Ensure you have process.env.JWT_SECRET defined in your .env file
    const decoded = jwt.verify(token, process.env.JWT_SK);
    
    // 3. Attach the user payload to the request object
    req.user = decoded;
    
    // 4. Move to the next middleware or route handler
    next();
  } catch (error) {
    // Catch expired or tampered tokens
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

module.exports = authMiddleware;