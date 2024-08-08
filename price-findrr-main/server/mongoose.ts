import mongoose from "mongoose";

let connectionCheck = false

export const connect = async() => {
    if(!process.env.MONGO_URL) {
        return console.error("Database URL not set")
    }   
    if(connectionCheck) {
        return console.log("Already connected")
    }

    try {
        await mongoose.connect(process.env.MONGO_URL)

        connectionCheck = true

        console.log("Connected to database")
    } catch(e){
        console.error(e)
    }
}