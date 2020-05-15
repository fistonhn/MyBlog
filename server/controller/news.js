import { pool } from '../config/configulation';
import query from '../db/queries';

const createNews = async (req, res) => {
  const { title, description, topic, author } = req.body;
 const urlToImage = req.file.path;
  const { email } = req.authUser;

  const createdOn = new Date().toLocaleString();

  const news = await pool.query(query.saveNews(email, title, description, urlToImage, author, topic, createdOn));


  return res.status(201).json({ status: 201, message: 'news successfully created', data: news.rows[0] });
};

const getAllNews = async (req, res) => {

  const allNews= await pool.query(query.getAllPaging());

  if (allNews.rowCount < 0) return res.status(404).send({ status: 404, message: 'there are no news !' });

  let requestedPage = req.query.p * 1;
  let entryNumber = allNews.rows.length;
  const newsPerPage = 3;

  const totalEntries = entryNumber;

  const allPages = Math.ceil(totalEntries / newsPerPage);

  const firstEntry = (newsPerPage * requestedPage) - newsPerPage;
  const lastEntry = (newsPerPage * requestedPage);

  let data = allNews.rows.slice(firstEntry, lastEntry);
  const thisPage = data.length;

  if (requestedPage <= 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist!' });

  if (!requestedPage) return res.status(200).send({ status: 200, message: 'display all news', data: allNews.rows });

  if (thisPage === 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist' });

  return res.status(200).send({
    status: 200,
    message: 'display all news',
    totalEntries,
    allPages,
    thisPage,
    requestedPage,
    data,
  });
};

const getAllRelatedNews = async (req, res) => {
  const topic = req.query.topic;

  const relatedNews = await pool.query(query.getNewsByTopic(topic));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};

const getOneNews = async (req, res) => {
  const { id } = req.params;
  const singleNews = await pool.query(query.getSpecificNews(id));

  if (singleNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: singleNews.rows[0] });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const news = await pool.query(query.getSpecificNews(id));

  if (news.rowCount === 0) return res.status(404).json({ status: 404, message: 'news not found' });

  let { title, description, author} = req.body;


  const updateData = await pool.query(query.updateSpecificNews(title, description, author, id));

  res.status(200).json({ message: 'news successful updated', data: updateData.rows[0] });
};

const deleteNews= async (req, res) => {
  const { id } = req.params;
  const news = await pool.query(query.deleteNews(id));


  if (news.rowCount > 0) {
    res.status(200).json({ status: 200, message: '​news successfully deleted' });
  } else {
    res.status(404).json({ status: 404, message: 'news not found' });
  }
};

export { createNews, getAllNews, getAllRelatedNews, getOneNews, updateNews, deleteNews };
