import Joi from '@hapi/joi';


const newsCreated = (req) => {
  const schema = {
    title: Joi.string().required().min(3).max(300),
    description: Joi.string().required().min(5),
    urlToImage: Joi.string(),
    author: Joi.string().required(),
    topic: Joi.string().required(),
    isPublished: Joi.string().required(),
    place: Joi.string().required(),
  };

  return Joi.validate(req.body, schema);
};

const userInput = (req) => {
  const schema = {
    firstName: Joi.string().min(2).max(25),
    lastName: Joi.string().min(2).max(25),
    email: Joi.string().email(),
    isAdmin: Joi.boolean(),
    password: Joi.string().min(6).max(15),
  };

  return Joi.validate(req.body, schema);
};

export { newsCreated, userInput };
