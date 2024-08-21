import Joi from 'joi';

interface CommentSchema {
  content: string;
}

const commentSchema = Joi.object<CommentSchema>({
  content: Joi.string().required()
});

export default commentSchema;
