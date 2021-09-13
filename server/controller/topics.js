import { pool } from '../config/configulation';
import query from '../db/queries';

const createTopic = async (req, res) => {
  try {
    const { countNews, topic } = req.body;

    const activated = true;

    const createdOn = new Date().toLocaleString();

    const newTopic = await pool.query(query.saveTopic(countNews, topic, activated, createdOn));

    return res.status(201).json({ status: 201, message: 'Topic successfully created', data: newTopic.rows[0] });
  } catch (error) {
    error.status(500).json({ status: 404, error: 'Server error, something went wrong!' });
  }
};
const getAllActiveTopics = async (req, res) => {
  const allActiveTopics = await pool.query(query.getAllOfActiveTopics());

  if (allActiveTopics.rowCount < 0) return res.status(404).send({ status: 404, message: 'there are no topics !' });

  let requestedPage = req.query.p * 1;
  let entryNumber = allActiveTopics.rows.length;
  const newsPerPage = 3;

  const totalEntries = entryNumber;

  const allPages = Math.ceil(totalEntries / newsPerPage);

  const firstEntry = (newsPerPage * requestedPage) - newsPerPage;
  const lastEntry = (newsPerPage * requestedPage);

  let data = allActiveTopics.rows.slice(firstEntry, lastEntry);
  const thisPage = data.length;

  if (requestedPage <= 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist!' });

  if (!requestedPage) return res.status(200).send({ status: 200, message: 'display all comments', data: allActiveTopics.rows });

  if (thisPage === 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist' });

  return res.status(200).send({
    status: 200,
    message: 'display all topics',
    totalEntries,
    allPages,
    thisPage,
    requestedPage,
    data,
  });
};
const getAllInactiveTopics = async (req, res) => {
  const allInactiveTopics = await pool.query(query.getAllOfInactiveTopics());

  if (allInactiveTopics.rowCount < 0) return res.status(404).send({ status: 404, message: 'there are no topics !' });

  let requestedPage = req.query.p * 1;
  let entryNumber = allInactiveTopics.rows.length;
  const newsPerPage = 3;

  const totalEntries = entryNumber;

  const allPages = Math.ceil(totalEntries / newsPerPage);

  const firstEntry = (newsPerPage * requestedPage) - newsPerPage;
  const lastEntry = (newsPerPage * requestedPage);

  let data = allInactiveTopics.rows.slice(firstEntry, lastEntry);
  const thisPage = data.length;

  if (requestedPage <= 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist!' });

  if (!requestedPage) return res.status(200).send({ status: 200, message: 'display all comments', data: allInactiveTopics.rows });

  if (thisPage === 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist' });

  return res.status(200).send({
    status: 200,
    message: 'display all topics',
    totalEntries,
    allPages,
    thisPage,
    requestedPage,
    data,
  });
};
const getOneTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTopic = await pool.query(query.getSpecificTopic(id));

    if (singleTopic.rowCount > 0) {
      res.status(200).json({ status: 200, data: singleTopic.rows[0] });
    } else {
      res.status(404).json({ status: 404, error: '404, TOPIC NOT FOUND' });
    }
  } catch (error) {
    error.status(500).json({ status: 404, error: 'Server error, something went wrong!' });
  }
};
const updateTopic = async (req, res) => {
  const { id } = req.params;
  const singleTopic = await pool.query(query.getSpecificTopic(id));

  if (singleTopic.rowCount === 0) return res.status(404).json({ status: 404, error: 'topic not found' });

  let { countNews, topic, activated } = req.body;

  if (!countNews) {
    countNews = singleTopic.rows[0].countnews;
  }
  if (!topic) {
    topic = singleTopic.rows[0].topic;
  }
  if (!activated) {
    activated = singleTopic.rows[0].activated;
  }

  const updateData = await pool.query(query.updateSpecificTopic(countNews, topic, activated, id));

  res.status(200).json({ status: 200, message: 'Topic Successfully Updated', data: updateData.rows[0] });
};
const deleteTopic = async (req, res) => {
  const { id } = req.params;
  const currentTopic = await pool.query(query.deleteTopic(id));

  if (currentTopic.rowCount > 0) {
    res.status(200).json({ status: 200, message: 'Topic successfully deleted' });
  } else {
    res.status(404).json({ status: 404, error: 'Topic not found' });
  }
};

export { createTopic, getAllActiveTopics, getAllInactiveTopics, getOneTopic, updateTopic, deleteTopic };
