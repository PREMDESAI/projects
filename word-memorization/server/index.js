// import packets from node_moduls
import express from 'express';
import dotenv from 'dotenv';

// import packets from file
import routes from './startup/routers.js';
import prisma from './startup/db.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

async function run(){
    try {
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT} !`);
        })
        
        routes(app)
    } catch (error) {
        console.log(error);
        await prisma.$disconnect()
        process.exit()
    }
}

run().then(async ()=>{
    await prisma.$disconnect()
})