const notesModel = require("../model/notes.model")

async function noteData(req, res){
  try{
  const{title, content} = req.body
  if(!title || !content){
    return res.status(400).json({
      message: "Title and content are required"
    })
  }
  const notes = await notesModel.create({
    title, content
  })
  res.status(201).json({
    message: "note created successfully",
    notes
  })
  }catch(err){
    res.status(500).json({
      message: "error creating notes"
    })
  }
}

async function getallNote(req, res){
  const notes = await notesModel.find().sort({ createdAt: -1 })
  res.status(200).json({
    notes
  })
}

async function updateNote(req, res){
  const{title, content} = req.body;
  const notes = await notesModel.findByIdAndUpdate(
    req.params.id,
    {title, content},
    {new : true}
  )
  res.status(200).json({
    message: "note updated successfully",
    notes
  })
}

async function deleteNote(req,res){
  const notes = await notesModel.findByIdAndDelete(
    req.params.id
  )
  res.status(200).json({
    message: "note deletes successfully",
    notes
  })
}

module.exports = {noteData, getallNote, updateNote, deleteNote}