import { pool } from '../config/configulation';
import query from '../db/queries';



const createNews = async (req, res) => {
 
  if(req.file == undefined){
    res.status(400).send({ status: 400, error: 'No File selected' });
  }

  const views = 0;
  const urlToImage = req.file.path;
  const { title, description, topic, author, isPublished, place, } = req.body;
 
  const { email } = req.authUser;

  const createdOn = new Date().toLocaleString();

  const news = await pool.query(query.saveNews(email, title, description, urlToImage, author, topic, isPublished, place, views, createdOn));


  return res.status(201).json({ status: 201, message: 'news successfully created', data: news.rows[0] });
};
const getAllNews = async (req, res) => {

  const allNews= await pool.query(query.getAllOfNews());

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
const getAllUnPublishNews = async (req, res) => {


  const unPublishNews = await pool.query(query.getAllUnPublishNews());

  if (unPublishNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: unPublishNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const getOneNews = async (req, res) => {


  const { id } = req.params;
  const singleNews = await pool.query(query.getSpecificNews(id));

  let counter = singleNews.rows[0].views

  counter++;

  const views = counter

   await pool.query(query.updateViews(views, id));


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

  let { title, description, author, isPublished, place } = req.body;

  
  if (!title) {
    title = news.rows[0].title;
  }
  if (!description) {
    description = news.rows[0].description;
  }
  if (!author) {
    author = news.rows[0].author;
  }

  if (isPublished === null) {
    isPublished = news.rows[0].ispublished;
  }

  if (!place) {
    place = news.rows[0].place;
  }



  
const updateData = await pool.query(query.updateSpecificNews(title, description, author, isPublished, place, id));

  res.status(200).json({status: 200, message: 'news successful updated', data: updateData.rows[0] });
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

// display nyamukuru section of news

const getNyamukuruMainNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getNyamukuruMainNews( place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const getNyamukuruNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getNyamukuruNews( place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};


// display sport section of news

const getSportMainNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getsportMainNews(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const getSportNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getSportNews( place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};

// display sport section of news

const getUtuntuNutundiMainNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getUtuntuNutundiMainNews(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const getUtuntuNutundiNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getUtuntuNutundiNews(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const getUtuntuNutundiNewsMostViews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.getUtuntuNutundiNewsMostViews(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};


// display bestNews & udushya

const bestNews = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.bestNews(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};
const udushya = async (req, res) => {

  const place = req.query.place;

  const relatedNews = await pool.query(query.udushya(place));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};


// display news by topic

const getAllRelatedNews = async (req, res) => {
  const topic = req.query.topic;

  const relatedNews = await pool.query(query.getNewsByTopic(topic));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};

const getMainByTopic = async (req, res) => {
  const topic = req.query.topic;

  const relatedNews = await pool.query(query.getMainTopic(topic));

  if (relatedNews.rowCount > 0) {
    res.status(200).json({ status: 200, data: relatedNews.rows });
  } else {
    res.status(404).json({ status: 404, message: 'No news to display' });
  }
};







export { createNews, getAllNews, getAllUnPublishNews, getAllRelatedNews, getOneNews, updateNews, deleteNews, getMainByTopic,
  getNyamukuruNews, getNyamukuruMainNews, getSportNews, getSportMainNews, getUtuntuNutundiMainNews, getUtuntuNutundiNews
,getUtuntuNutundiNewsMostViews, bestNews, udushya };
