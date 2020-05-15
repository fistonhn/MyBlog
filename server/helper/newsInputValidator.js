import Joi from 'joi';

const newsInput = (req) => {
  const schema = {
    title: Joi.string().min(3).max(300).required(),
    description: Joi.string().min(5).required(),
    author: Joi.string().max(50).required(),
  };

  return Joi.validate(req.body, schema);
};

const newsCreated = (req) => {
  const schema = {
    title: Joi.string().required().min(3).max(300),
    description: Joi.string().required().min(5),
    urlToImage: Joi.string(),
    author: Joi.string().max(50).required(),
    topic: Joi.string().required(),
  };

  return Joi.validate(req.body, schema);
};

const userInput = (req) => {
  const schema = {
    firstName: Joi.string().min(2).max(25).required(),
    lastName: Joi.string().min(2).max(25).required(),
    email: Joi.string().email().required(),
    isAdmin: Joi.boolean().required(),
    password: Joi.string().min(6).max(15).required(),
  };

  return Joi.validate(req.body, schema);
};

export { newsInput, newsCreated, userInput };
