const query = {

  findUser: (email) => ({
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }),
  regUser: (firstName, lastName, email, isAdmin, password, createdOn ) => ({
    text: 'INSERT INTO users (firstName,lastName,email,isAdmin,password,createdOn ) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *',
    values: [firstName, lastName, email, isAdmin, password, createdOn],
  }),
  getAllUsers: () => ({
    text: `SELECT * FROM users ORDER BY createdOn DESC`,
    values: [],
  }),
  updateSpecificUser: (firstName, lastName, email, isAdmin, password, id) => ({
    text: 'UPDATE users SET firstName = $1, lastName = $2, email = $3, isAdmin = $4, password = $5 WHERE id = $6 RETURNING *',
    values: [firstName, lastName, email, isAdmin, password, id],
  }),
  deleteSpecificUser: (id) => ({
    text: 'DELETE FROM users u WHERE u.id = $1' ,
    values: [id],
  }),


  saveNews: (email, title, description, urlToImage, author, topic, createdOn) => ({
    text: 'INSERT INTO news (email, title, description, urlToImage, author, topic, createdOn) VALUES ( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *',
    values: [email, title, description, urlToImage, author, topic, createdOn],
  }),
  getAllPaging: () => ({
    text: `SELECT n.* FROM news n ORDER BY n.createdOn DESC`,
    values: [],
  }),
  getNewsByTopic: (topic) => ({
    text: `SELECT n.* FROM news n
          WHERE n.topic = $1 ORDER BY n.createdOn DESC`,
    values: [topic],
  }),
  getSpecificNews: (id) => ({
    text: `SELECT n.* from news n WHERE n.id = $1`,
    values: [id],
  }),
  updateSpecificNews: (title, description, author, id) => ({
    text: 'UPDATE news SET title = $1, description = $2, author = $3 WHERE id = $4 RETURNING *',
    values: [title, description, author, id],
  }),
  deleteNews: (id) => ({
    text: 'DELETE FROM news n WHERE n.id = $1',
    values: [id],
  }),

};

export default query;
