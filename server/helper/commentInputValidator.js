import Joi from '@hapi/joi';

const commentCreated = (req) => {
  const schema = {
    newsId: Joi.required(),
    newsTitle: Joi.string().required(),
    name: Joi.string().required().min(2).max(100),
    email: Joi.string().required().email().max(100),
    comment: Joi.string().required().max(500),
    isPublished: Joi.boolean().required(),
  };

  return Joi.validate(req.body, schema);
};

export default commentCreated;
