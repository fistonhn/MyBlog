import lodash from 'lodash';
import { generateToken } from '../helper/generateAuthToken';
import { encryptPassword, decryptPassword } from '../helper/hashedPassword';
import { pool } from '../config/configulation';
import query from '../db/queries';


const signup = async (req, res) => {
  const { firstName, lastName, email, isAdmin } = req.body;
  let { password } = req.body;
  const createdOn = new Date().toLocaleString();

  const usersFound = await pool.query(query.findUser(email));

  if (usersFound.rowCount > 0) return res.status(409).json({ message: 'Email address already taken' });

  password = encryptPassword(password);
  const user = await pool.query(query.regUser(firstName, lastName, email, isAdmin, password, createdOn));

  const token = generateToken(user.rows[0].id, user.rows[0].email, user.rows[0].isadmin);

  const data = {
    token,
    userInfo: lodash.pick(user.rows[0], 'firstname', 'lastname', 'email', 'isadmin'),
  };

  res.status(201).json({ status: 201, message: 'User created successfull', data });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const usersFound = await pool.query(query.findUser(email));

  if (usersFound.rows.length < 1) return res.status(404).send({ status: 404, message: 'No associated account with this email' });


    const isPasswordValid = decryptPassword(password, usersFound.rows[0].password);
    if (!isPasswordValid) return res.status(404).json({ status: 404, message: 'Incorrect password!' });

  const token = generateToken(usersFound.rows[0].id, usersFound.rows[0].email, usersFound.rows[0].isadmin);

  const data = {
    token,
    userInfo: lodash.pick(usersFound.rows[0], 'firstname', 'lastname', 'email', 'isadmin'),
  };
  res.status(200).json({ status: 200, message: 'loggin successfull', data });
};


const getUsers = async (req, res) => {
  const users = await pool.query(query.getAllUsers());

  const data = users.rows;

  res.status(201).json({ status: 201, message: 'Users displayed successfull', data });
};

const updateUser = async (req, res) => {

  const { id } = req.params;
  let { firstName, lastName, email, isAdmin, password} = req.body;

  password = encryptPassword(password);
  const updateUserData = await pool.query(query.updateSpecificUser(firstName, lastName, email, isAdmin, password, id));

  if (updateUserData.rowCount > 0) {
    res.status(200).json({ message: 'user successful updated', data: updateUserData.rows[0] });
  } else {
    res.status(404).json({ status: 404, message: 'user not found' });
  }
 
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query(query.deleteSpecificUser(id));


  if (user.rowCount > 0) {
    res.status(200).json({ status: 200, message: '​user successfully deleted' });
  } else {
    res.status(404).json({ status: 404, message: 'user not found' });
  }
};



export { signup, login, getUsers, updateUser, deleteUser };
