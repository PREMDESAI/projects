import Joi from 'joi';

interface LoginSchema {
  email: string;
  password: string;
}

const loginSchema = Joi.object<LoginSchema>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export default loginSchema;
