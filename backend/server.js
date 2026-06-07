const app = require("./src/app")
const connectDB = require("./src/database/db")
require('dotenv').config()

connectDB()
const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`)
})