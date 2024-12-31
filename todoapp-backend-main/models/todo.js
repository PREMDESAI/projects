//schema design 
const mongoose = require("mongoose")

const todoScheme = mongoose.Schema({
    title: {
        type: String ,
        required: true 
    },
    description: {
        type: String ,
        required: true 
    },
    createdAt: {
        type: Date ,
        required: true ,
        default: Date.now()
    },
    updatedAt: {
        type: Date ,
        required: true ,
        default: Date.now()
    }
},{ timestamps: true })

module.exports = mongoose.model("Todo",todoScheme)