const Todo = require("../models/todo")

exports.updateTodo = async(req,res) => {
    try{
        const {id} = req.params  
        const {title,description} = req.body 
        const responese = await Todo.findByIdAndUpdate(
            {_id:id} ,
            {title,description,updatedAt:Date.now()}
        )
        res.status(200).json({
            success: true ,
            data: responese ,
            message: "Updated succesfully"
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
