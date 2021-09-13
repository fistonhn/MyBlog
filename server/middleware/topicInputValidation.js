import topicCreated from '../helper/topicInputValidator';

const validateTopicCreated = (req, res, next) => {
  const { error } = topicCreated(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

export default validateTopicCreated;
