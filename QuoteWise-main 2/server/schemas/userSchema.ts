
import Joi from 'joi';

interface UserSchema {
  username: string;
  email: string;
  password: string;
}

const userSchema = Joi.object<UserSchema>({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export default userSchema;