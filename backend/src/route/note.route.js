const express = require('express')
const noteController = require('../controller/note.controller')

const router  = express.Router()

router.post("/create", noteController.noteData)
router.get("/all", noteController.getallNote)
router.put("/:id", noteController.updateNote)
router.delete("/:id", noteController.deleteNote)

module.exports = router