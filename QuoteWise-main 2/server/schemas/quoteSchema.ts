import Joi from 'joi';

interface QuoteSchema {
  content: string;
  author: string;
  userPrompt: string;
}

const quoteSchema = Joi.object<QuoteSchema>({
  content: Joi.string().required(),
  userPrompt: Joi.string().required()
});

export default quoteSchema;
