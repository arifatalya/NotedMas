const express = require('express');
const { getAllNotes, createNote, editNote, deleteNote } = require('../controllers/noteController.js');

const router = express.Router();

router.get('/notes', getAllNotes);
router.post('/notes', createNote);
router.put('/notes/:id', editNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
