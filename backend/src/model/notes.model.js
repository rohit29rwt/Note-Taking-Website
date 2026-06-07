const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true
  },
  content: {
    type: String,
  }
},{timestamp : true})

const notesModel = mongoose.model("notesModel", noteSchema)

module.exports = notesModel