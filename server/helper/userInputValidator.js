import Joi from '@hapi/joi';

const signupInput = (req) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().required().min(2).max(25),
    lastName: Joi.string().required().min(2).max(25),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(15),
    isAdmin: Joi.boolean().required(),
  }) 

  return Joi.validate(req.body, schema);
};

const signinInput = (req) => {
  const schema = {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(15),
  };

  return Joi.validate(req.body, schema);
};

export { signupInput, signinInput };
