import { newsCreated } from '../helper/newsInputValidator';

const validateNewsCreated = (req, res, next) => {
  const { error } = newsCreated(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

export { validateNewsCreated };
