const Todo = require("../models/todo")

exports.getTodo = async(req,res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json({
            success: true ,
            data: todos ,
            message: "Entire Todo Data fetched"
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

exports.getTodoById = async(req,res) => {
    try{
        const id = req.params.id
        const todo = await Todo.findById({ _id: id})
        if(!todo){
            return res.status(404).json({
                success: false ,
                message: "No Data with this Id"
            })
        }
        res.status(200).json({
            success: true ,
            data: todo ,
            message: "Entire Todo Data fetched"
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