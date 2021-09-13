const query = {

  findUser: (email) => ({
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }),
  regUser: (firstName, lastName, email, isAdmin, password, createdOn) => ({
    text: 'INSERT INTO users (firstName,lastName,email,isAdmin,password,createdOn ) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *',
    values: [firstName, lastName, email, isAdmin, password, createdOn],
  }),
  getAllUsers: () => ({
    text: 'SELECT * FROM users ORDER BY id DESC',
    values: [],
  }),
  getSpecificUser: (id) => ({
    text: 'SELECT u.* from users u WHERE u.id = $1',
    values: [id],
  }),
  updateSpecificUser: (firstName, lastName, email, isAdmin, password, id) => ({
    text: 'UPDATE users SET firstName = $1, lastName = $2, email = $3, isAdmin = $4, password = $5 WHERE id = $6 RETURNING *',
    values: [firstName, lastName, email, isAdmin, password, id],
  }),
  deleteSpecificUser: (id) => ({
    text: 'DELETE FROM users u WHERE u.id = $1',
    values: [id],
  }),

  // news

  saveNews: (email, title, description, urlToImage, author, topic, category, isPublished, place, views, createdOn) => ({
    text: 'INSERT INTO news (email, title, description, urlToImage, author, topic, category, isPublished, place, views, createdOn) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) RETURNING *',
    values: [email, title, description, urlToImage, author, topic, category, isPublished, place, views, createdOn],
  }),

  saveImgUrl: (urlToImage, createdOn) => ({
    text: 'INSERT INTO images (urlToImage, createdOn) VALUES ( $1, $2 ) RETURNING *',
    values: [urlToImage, createdOn],
  }),

  getAllOfNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.isPublished = \'true\' ORDER BY n.id DESC ',
    values: [],
  }),

  getAllUnPublishNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.isPublished = \'false\' ORDER BY n.id DESC ',
    values: [],
  }),

  getSpecificNews: (id) => ({
    text: 'SELECT n.* from news n WHERE n.id = $1 AND n.isPublished = \'true\'',
    values: [id],
  }),

  getUnPublishedSpecificNews: (id) => ({
    text: 'SELECT n.* from news n WHERE n.id = $1 AND n.isPublished = \'false\'',
    values: [id],
  }),
  updateSpecificNews: (title, description, topic, category, author, isPublished, place, id) => ({
    text: 'UPDATE news SET title = $1, description = $2, topic = $3, category = $4, author = $5, isPublished = $6, place = $7 WHERE id = $8 RETURNING *',
    values: [title, description, topic, category, author, isPublished, place, id],
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
    text: 'SELECT n.* FROM news n WHERE n.place = \'inkuruNyamukuru1\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 1 ROWS ONLY',
    values: [],
  }),
  getNyamukuruNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'inkuruNyamukuru8\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 8 ROWS ONLY',
    values: [],
  }),

  // get sport section of news

  getsportMainNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'sport1\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 1 ROWS ONLY',
    values: [],
  }),
  getSportNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'sport4\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 5 ROWS ONLY',
    values: [],
  }),

  // get utuntuNutundi section of news

  getUtuntuNutundiMainNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'utuntuNutundi1\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 1 ROWS ONLY',
    values: [],
  }),
  getUtuntuNutundiNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'utuntuNutundi3\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 3 ROWS ONLY',
    values: [],
  }),
  getUtuntuNutundiNewsMostViews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'utuntuNutundiMostViews6\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 6 ROWS ONLY',
    values: [],
  }),

  // get bestNews & udushya section of news

  bestNews: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'bestNews6\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 6 ROWS ONLY',
    values: [],
  }),
  udushya: () => ({
    text: 'SELECT n.* FROM news n WHERE n.place = \'udushya5\' AND n.isPublished = \'true\' ORDER BY n.id DESC FETCH FIRST 5 ROWS ONLY',
    values: [],
  }),

  // get news by categories
  getMainCategory: (category) => ({
    text: `SELECT n.* FROM news n
          WHERE n.category = $1 AND n.isPublished = 'true' ORDER BY n.id DESC FETCH FIRST 1 ROWS ONLY`,
    values: [category],
  }),

  getNewsByCategory: (category) => ({
    text: `SELECT n.* FROM news n
          WHERE n.category = $1 AND n.isPublished = 'true' ORDER BY n.id DESC FETCH FIRST 8 ROWS ONLY`,
    values: [category],
  }),

  getAllByTopic: (topic) => ({
    text: `SELECT n.* FROM news n
          WHERE n.topic = $1 AND n.isPublished = 'true' ORDER BY n.id DESC`,
    values: [topic],
  }),

  // comments

  saveComment: (newsId, newsTitle, name, email, comment, isPublished, createdOn) => ({
    text: 'INSERT INTO comments (newsId, newsTitle, name, email, comment, isPublished, createdOn) VALUES ( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *',
    values: [newsId, newsTitle, name, email, comment, isPublished, createdOn],
  }),

  getAllOfComments: () => ({
    text: 'SELECT c.* FROM comments c WHERE c.isPublished = \'true\' ORDER BY c.id DESC ',
    values: [],
  }),

  getAllUnPublishComments: () => ({
    text: 'SELECT c.* FROM comments c WHERE c.isPublished = \'false\' ORDER BY c.id DESC ',
    values: [],
  }),

  getAllCommentsNewsTitle: (newsId) => ({
    text: `SELECT c.* FROM comments c
          WHERE c.newsId = $1 AND c.isPublished = 'true' ORDER BY c.id DESC`,
    values: [newsId],
  }),

  getSpecificComment: (id) => ({
    text: 'SELECT c.* FROM comments c WHERE c.id = $1',
    values: [id],
  }),

  updateSpecificComment: (newsId, newsTitle, name, email, comment, isPublished, id) => ({
    text: 'UPDATE comments SET newsId = $1, newsTitle = $2, name = $3, email = $4, comment = $5, isPublished = $6 WHERE id = $7 RETURNING *',
    values: [newsId, newsTitle, name, email, comment, isPublished, id],
  }),

  deleteComment: (id) => ({
    text: 'DELETE FROM comments c WHERE c.id = $1',
    values: [id],
  }),

  // topics table

  saveTopic: (countNews, topic, activated, createdOn) => ({
    text: 'INSERT INTO topics (countNews, topic, activated, createdOn) VALUES ( $1, $2, $3, $4 ) RETURNING *',
    values: [countNews, topic, activated, createdOn],
  }),

  getAllOfActiveTopics: () => ({
    text: 'SELECT t.* FROM topics t WHERE t.activated = \'true\' ORDER BY t.id DESC ',
    values: [],
  }),

  getAllOfInactiveTopics: () => ({
    text: 'SELECT t.* FROM topics t WHERE t.activated = \'false\' ORDER BY t.id DESC ',
    values: [],
  }),

  getSpecificTopic: (id) => ({
    text: 'SELECT t.* FROM topics t WHERE t.id = $1',
    values: [id],
  }),

  updateSpecificTopic: (countNews, topic, activated, id) => ({
    text: 'UPDATE topics SET countNews = $1, topic = $2, activated = $3 WHERE id = $4 RETURNING *',
    values: [countNews, topic, activated, id],
  }),

  deleteTopic: (id) => ({
    text: 'DELETE FROM topics t WHERE t.id = $1',
    values: [id],
  }),

};

export default query;
