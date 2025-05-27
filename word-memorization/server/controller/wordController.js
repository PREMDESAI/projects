const { Word, wordValidate } = require("../models/word")
const objectId = require('mongoose').Types.ObjectId;

const getWords = async (req, res) => {
    try {
        const userId = req.user._id;
        const query = [ {"userId"  : {$eq: userId}} ]
        const {status, name, translation, sort, pageNum, pageSize} = req.query;
        if(status) query.push({"status"  : {$eq: status}})
        if(name) query.push({'$or': [{'name'   : {$regex: '.*'+name+'.*'}}]})
        if(translation) query.push({'transcription'    : {$regex:'^'+translation+'$'}})

        const word = await Word
            .find({$and: query})
            .sort((sort)? sort : null)
            .skip((pageNum && pageSize)? (pageNum-1)*pageSize : 0)
            .limit((pageNum && pageSize)? pageSize : 0);
        if(!word)
           return res.status(404).send({error: 'data not fount'})
        res.send(word);
    } catch (error) {
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
};


const getWordWithId = async (req, res) => {
    try {
        const userId = req.user._id;
        const id = req.params.id;
        if(!objectId.isValid(id)) 
            return res.status(401).json({"error": "id is invalid"});
        const word = await Word.find({userId: userId, '_id': id});
        if(!word)
            return res.status(404).send({error: 'data not fount'})
        res.send(word);
    } catch (error) {
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
};

const addWord = async (req, res) => {
    try{
        const userId = req.user._id;
        const {error} = wordValidate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        let word = new Word({
            name: req.body.name,
            transcription: req.body.transcription,
            translation: req.body.translation,
            status: req.body.status,
            exampleText: req.body.exampleText,
            exampleMeaning: req.body.exampleMeaning,
            userId: userId
        });
        word = await word.save();
        res.send(word);
    } catch(error){
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
}

const updateWord = async (req, res) => {
    try{
        const userId = req.user._id;
        const {error} = wordValidate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const id = req.params.id;
        if(!objectId.isValid(id)) 
            return res.status(401).json({"error": "id is invalid"});
        let word = await Word.findOneAndUpdate({userId: userId, _id: id}, {
            name: req.body.name,
            transcription: req.body.transcription,
            translation: req.body.translation,
            status: req.body.status,
            exampleText: req.body.exampleText,
            exampleText: req.body.exampleMeaning,
        }, {new: true});
        if(!word)
            return res.status(404).send({error: 'data not fount'});
        res.send(word);
    }catch(error){
        res.status(500).json({ error: `Data fetch error: ${error}`});
    }
}

const deleteWord = async (req, res) => {
    try{
        const userId = req.user._id;
        if(!req.params.id) return res.status(400).send({error: 'id is required'})
        const word = await Word.findOneAndDelete({userId: userId, _id: req.params.id});
        if(!word)
            return res.status(404).send({error: 'data not fount'});
        res.send(word);
    }catch(error){
        res.status(500).json({ error: `Data fetch error: ${error}`});    
    }
}
module.exports = {
    getWords,
    getWordWithId,
    addWord,
    updateWord,
    deleteWord
}