const mongoose = require('mongoose');
const Joi = require('joi') 

const WordSchema = new mongoose.Schema({
    name: {
        type: String,
        reuqired: true,
        unique: true,
        minlength: 1,
        maxlength: 150,
    },
    transcription: {
        type: String,
        minlength: 1,
        maxlength: 50,
        default: "[]"
    },
    translation: {
        type: String,
        reuqired: true,
        minlength: 1,
        maxlength: 150
    },
    status: {
        type: String,
        default: 'new',
        enum: ['new', 'repeat', 'memorized']
    },
    userId: {
        type: mongoose.Types.ObjectId,
        requried: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    exampleText: { type: String},
    exampleMeaning: { type: String}
});

const Word = mongoose.model('word', WordSchema);

const wordValidate = (data) => {
    const wordValidateSchema = Joi.object({
        name: Joi.string().required().max(150).min(1),
        transcription: Joi.string().min(1).max(50),
        translation: Joi.string().required().min(1).max(150),
        status: Joi.string().default("new").valid('new', 'repeat', 'memorized')
    })

    return wordValidateSchema.validate(data);
}

module.exports = {
    Word,
    wordValidate
}