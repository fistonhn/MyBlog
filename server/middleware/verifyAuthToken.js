import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from '../config/configulation';
import query from '../db/queries';

dotenv.config();

const verifyAuthToken = async (req, res, next) => {
  const authHeader = await req.headers.authorization;

  if (typeof authHeader === 'undefined') return res.status(401).json({ error: 'Unauthorised - Header Not Set' });

  const token = authHeader;

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorised Token or token not provided', err });
    }
    req.authUser = decodedToken;
    const authEmail = decodedToken.email;

    const usersFound = await pool.query(query.findUser(authEmail));

    if (!usersFound.rows[0]) return res.status(401).send({ status: 401, error: 'You are not authorized to perform this action' });

    next();
  });
};

const verifyAdminToken = async (req, res, next) => {
  const authHeader = await req.headers.authorization;

  if (typeof authHeader === 'undefined') return res.status(401).json({ error: 'Unauthorised - Header Not Set' });

  const token = authHeader;

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Admin token not provided', err });
    }

    req.authUser = decodedToken;
    const authEmail = decodedToken.email;

    const usersFind = await pool.query(query.findUser(authEmail));

    if (!usersFind.rows[0]) return res.status(401).send({ status: 401, error: 'Only Admins are authorized to perform this action' });

    const { isAdmin } = req.authUser;

    if (isAdmin === 'false') return res.status(403).send({ status: 403, error: 'Access denied, you are not an Admin' });

    next();
  });
};

export { verifyAuthToken, verifyAdminToken };
