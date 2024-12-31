const Todo = require("../models/todo")

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params  
        const response = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success: true ,
            data: response ,
            message: "Deleted succesfully"
        })
    }
    catch(e){
        console.log("Error in Delete req")
        console.error(e)
        res.status(500).json({
            success: false ,
            data: 'internal server error' ,
            message: e.message
        })
    }
}
