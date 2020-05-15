import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id, email, isAdmin) => {
  const token = jwt.sign(
    { id, email, isAdmin },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: '7d' },
  );

  return token;
};


export { generateToken };
