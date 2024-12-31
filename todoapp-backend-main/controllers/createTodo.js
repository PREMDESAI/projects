//business logic
const Todo = require("../models/todo")

exports.createTodo = async(req,res) => {
    try{
        const {title,description} = req.body 
        const response = Todo.create({title,description}) ;
        res.status(200).json({
            success: true ,
            data: response ,
            message: "Entry Created Succesfully"
        })
    }
    catch(e){
        console.log("Error in POST req")
        console.error(e)
        res.status(500).json({
            success: false ,
            data: 'internal server error' ,
            message: e.message
        })
    }
}

