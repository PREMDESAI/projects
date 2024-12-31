require("dotenv").config()
const mongoose = require("mongoose")

const dbConnect = () => {
	mongoose.connect(process.env.DATABASE_URL ,{
		useNewUrlParser: true ,
		useUnifiedTopology: true 
	})
	.then(console.log("DB connection sucessfull"))
	.catch(e => {
		console.log("DB connection failed")
		console.error(e.message)
		process.exit(1) 
	})
}

module.exports = dbConnect

