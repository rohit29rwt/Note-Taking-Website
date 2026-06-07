const express = require('express')
const noteRoute = require('./route/note.route')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/note" , noteRoute)

module.exports = app