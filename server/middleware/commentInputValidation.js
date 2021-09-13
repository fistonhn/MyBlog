import commentCreated from '../helper/commentInputValidator';

const validateCommentCreated = (req, res, next) => {
  const { error } = commentCreated(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

export default validateCommentCreated;
