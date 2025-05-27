//import packet from node_modules
import express from 'express';
import cors from 'cors';


//import routes from file
import user from '../routes/user.js';
import auth from '../routes/auth.js';
import game from '../routes/game.js';
// import word from '../routes/words.js';

export default function(app){
    //middilwares
    app.use(express.urlencoded({extended: true}));
    app.use(express.json()); 
    app.use(cors());
    
    //routes
    app.use("/api/users", user);
    app.use("/api/auth", auth);
    // app.use('/api/words', word);
    app.use("/api/game", game);
}