import { pool } from '../config/configulation';
import query from '../db/queries';

const createComment = async (req, res) => {
  try {
    const { newsId, newsTitle, name, email, comment } = req.body;

    const isPublished = false;

    const createdOn = new Date().toLocaleString();

    const newComment = await pool.query(query.saveComment(newsId, newsTitle, name, email, comment, isPublished, createdOn));

    return res.status(201).json({ status: 201, message: 'comment successfully created', data: newComment.rows[0] });
  } catch (error) {
    error.status(500).json({ status: 404, error: 'Server error, something went wrong!' });
  }
};
const getAllComments = async (req, res) => {
  const allComments = await pool.query(query.getAllOfComments());

  if (allComments.rowCount < 0) return res.status(404).send({ status: 404, message: 'there are no comments !' });

  let requestedPage = req.query.p * 1;
  let entryNumber = allComments.rows.length;
  const newsPerPage = 3;

  const totalEntries = entryNumber;

  const allPages = Math.ceil(totalEntries / newsPerPage);

  const firstEntry = (newsPerPage * requestedPage) - newsPerPage;
  const lastEntry = (newsPerPage * requestedPage);

  let data = allComments.rows.slice(firstEntry, lastEntry);
  const thisPage = data.length;

  if (requestedPage <= 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist!' });

  if (!requestedPage) return res.status(200).send({ status: 200, message: 'display all comments', data: allComments.rows });

  if (thisPage === 0) return res.status(404).send({ status: 404, message: 'the page you request does not exist' });

  return res.status(200).send({
    status: 200,
    message: 'display all comments',
    totalEntries,
    allPages,
    thisPage,
    requestedPage,
    data,
  });
};
const getAllUnPublishComments = async (req, res) => {
  const unPublishComments = await pool.query(query.getAllUnPublishComments());

  if (unPublishComments.rowCount > 0) {
    res.status(200).json({ status: 200, data: unPublishComments.rows });
  } else {
    res.status(404).json({ status: 404, error: 'No unPublished comments available' });
  }
};
const getAllCommentsNewsTitle = async (req, res) => {
  const { newsId } = req.query;
  const AllCommentsNewsTitle = await pool.query(query.getAllCommentsNewsTitle(newsId));

  if (AllCommentsNewsTitle.rowCount > 0) {
    res.status(200).json({ status: 200, data: AllCommentsNewsTitle.rows });
  } else {
    res.status(404).json({ status: 404, error: 'No comments available' });
  }
};
const getOneComment = async (req, res) => {
  try {
    const { id } = req.params;
    const singleComment = await pool.query(query.getSpecificComment(id));

    if (singleComment.rowCount > 0) {
      res.status(200).json({ status: 200, data: singleComment.rows[0] });
    } else {
      res.status(404).json({ status: 404, message: '404, COMMENT NOT FOUND' });
    }
  } catch (error) {
    error.status(500).json({ status: 404, error: 'Server error, something went wrong!' });
  }
};
const updateComment = async (req, res) => {
  const { id } = req.params;
  const singleComment = await pool.query(query.getSpecificComment(id));

  if (singleComment.rowCount === 0) return res.status(404).json({ status: 404, error: 'Comment not found' });

  let { newsId, newsTitle, name, email, comment, isPublished } = req.body;

  if (!newsId) {
    newsId = singleComment.rows[0].newsid;
  }
  if (!newsTitle) {
    newsTitle = singleComment.rows[0].newstitle;
  }
  if (!name) {
    name = singleComment.rows[0].name;
  }

  if (!email) {
    email = singleComment.rows[0].email;
  }

  if (!comment) {
    comment = singleComment.rows[0].comment;
  }

  if (!isPublished) {
    isPublished = singleComment.rows[0].ispublished;
  }

  const updateData = await pool.query(query.updateSpecificComment(newsId, newsTitle, name, email, comment, isPublished, id));

  res.status(200).json({ status: 200, message: 'Comment Successfully Updated', data: updateData.rows[0] });
};
const deleteComment = async (req, res) => {
  const { id } = req.params;
  const currentComment = await pool.query(query.deleteComment(id));

  if (currentComment.rowCount > 0) {
    res.status(200).json({ status: 200, message: 'comment successfully deleted' });
  } else {
    res.status(404).json({ status: 404, error: 'comment not found' });
  }
};

export { createComment, getAllComments, getAllUnPublishComments, getAllCommentsNewsTitle, getOneComment, updateComment, deleteComment };
