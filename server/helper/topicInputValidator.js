import Joi from '@hapi/joi';

const topicCreated = (req) => {
  const schema = {
    countNews: Joi.required(),
    topic: Joi.string().required().min(2).max(255),
    activated: Joi.boolean().required(),
  };

  return Joi.validate(req.body, schema);
};

export default topicCreated;
