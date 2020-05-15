import { newsInput, newsCreated, userInput } from '../helper/newsInputValidator';

const validateNewsInput = (req, res, next) => {
  const { error } = newsInput(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

const validateNewsCreated = (req, res, next) => {
  const { error } = newsCreated(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};

const validateUserInput = (req, res, next) => {
  const { error } = userInput(req);
  if (error) return res.status(400).json({ status: res.statusCode, error: error.details[0].message });

  next();
};



export { validateNewsInput, validateNewsCreated, validateUserInput };
