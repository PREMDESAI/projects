require("dotenv").config()
const express = require("express")
const app = express() 

const port = process.env.PORT || 4000

app.use(express.json())

const todoRoutes = require("./routes/todos")
app.use("/api/v1", todoRoutes)

app.listen(port , ()=>console.log(`server started at ${port}`))

const dbConnect = require("./config/database")
dbConnect() 


app.get("/" , (req,res)=>res.send("<h1>This is HomePage Baby</h1>"))