
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
    
  const autHeader = req.headers.authorization;
  if (!autHeader) return res.status(401).json({ error: 'Token not provided.' });

  const [, token] = autHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    const { id, email } = decoded;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    
    if (!user) return res.status(401).json({ error: 'Invalid User.' });
    req.userId = id;
    req.userEmail = email;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Expired or invalid token.' });
  }
};  
