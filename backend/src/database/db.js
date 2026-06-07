const mongoose = require('mongoose')

async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("server is connected to database")
  }catch(err){
    console.error("error connecting database", err)
  }
}

module.exports = connectDB