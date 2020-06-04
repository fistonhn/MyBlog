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
  getSpecificUser: (id) => ({
    text: `SELECT u.* from users u WHERE u.id = $1`,
    values: [id],
  }),
  updateSpecificUser: (firstName, lastName, email, isAdmin, id) => ({
    text: 'UPDATE users SET firstName = $1, lastName = $2, email = $3, isAdmin = $4 WHERE id = $5 RETURNING *',
    values: [firstName, lastName, email, isAdmin, id],
  }),
  deleteSpecificUser: (id) => ({
    text: 'DELETE FROM users u WHERE u.id = $1' ,
    values: [id],
  }),

  // news

  saveNews: (email, title, description, urlToImage, author, topic, isPublished, place, views, createdOn) => ({
    text: 'INSERT INTO news (email, title, description, urlToImage, author, topic, isPublished, place, views, createdOn) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING *',
    values: [email, title, description, urlToImage, author, topic, isPublished, place, views, createdOn],
  }),

  getAllOfNews: () => ({
    text: `SELECT n.* FROM news n ORDER BY n.createdOn DESC`,
    values: [],
  }),

  getSpecificNews: (id) => ({
    text: `SELECT n.* from news n WHERE n.id = $1`,
    values: [id],
  }),
  updateSpecificNews: (title, description, author, isPublished, place, id) => ({
    text: 'UPDATE news SET title = $1, description = $2, author = $3, isPublished = $4, place = $5 WHERE id = $6 RETURNING *',
    values: [title, description, author, isPublished, place, id],
  }),
  updateViews: (views, id) => ({
    text: 'UPDATE news SET views = $1 WHERE id = $2 RETURNING *',
    values: [views, id],
  }),
  deleteNews: (id) => ({
    text: 'DELETE FROM news n WHERE n.id = $1',
    values: [id],
  }),

   // get nyamukuru section of news so isPublished = 'UnPublish' means published news

   getNyamukuruMainNews: () => ({
    text: `SELECT n.* FROM news n WHERE n.place = 'inkuruNyamukuru1' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 1 ROWS ONLY`,
    values: [],
  }),
  getNyamukuruNews: () => ({
    text: `SELECT n.* FROM news n WHERE n.place = 'inkuruNyamukuru8' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 8 ROWS ONLY`,
    values: [],
  }),


   // get sport section of news

      getsportMainNews: () => ({
        text: `SELECT n.* FROM news n WHERE n.place = 'sport1' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 1 ROWS ONLY`,
        values: [],
      }),
      getSportNews: () => ({
        text: `SELECT n.* FROM news n WHERE n.place = 'sport4' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 4 ROWS ONLY`,
        values: [],
      }),


     // get utuntuNutundi section of news

     getUtuntuNutundiMainNews: () => ({
      text: `SELECT n.* FROM news n WHERE n.place = 'utuntuNutundi1' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 1 ROWS ONLY`,
      values: [],
    }),
    getUtuntuNutundiNews: () => ({
      text: `SELECT n.* FROM news n WHERE n.place = 'utuntuNutundi3' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 3 ROWS ONLY`,
      values: [],
    }),
    getUtuntuNutundiNewsMostViews: () => ({
      text: `SELECT n.* FROM news n WHERE n.place = 'utuntuNutundiMostViews6' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 6 ROWS ONLY`,
      values: [],
    }),




  
     // get bestNews & udushya section of news

     bestNews: () => ({
      text: `SELECT n.* FROM news n WHERE n.place = 'bestNews6' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 6 ROWS ONLY`,
      values: [],
    }),
    udushya: () => ({
      text: `SELECT n.* FROM news n WHERE n.place = 'udushya5' AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 5 ROWS ONLY`,
      values: [],
    }),





  // get news by categories
  getMainTopic: (topic) => ({
    text: `SELECT n.* FROM news n
          WHERE n.topic = $1 AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 1 ROWS ONLY`,
    values: [topic],
  }),

  getNewsByTopic: (topic) => ({
    text: `SELECT n.* FROM news n
          WHERE n.topic = $1 AND n.isPublished = 'UnPublish' ORDER BY n.createdOn DESC FETCH FIRST 8 ROWS ONLY`,
    values: [topic],
  }),






};

export default query;
