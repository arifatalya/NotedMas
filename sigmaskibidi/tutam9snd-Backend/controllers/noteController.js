const { Pool } = require('../connect_db.js');

const getAllNotes = async (req, res) => {
    try {
        const result = await Pool.query('SELECT * FROM notes');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createNote = async (req, res) => {
    const { title, body } = req.body;
    try {
        const result = await Pool.query(
            'INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING *',
            [title, body]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editNote = async (req, res) => {
    const { id } = req.params;
    const { title, body } = req.body;
    try {
        const result = await Pool.query(
            'UPDATE notes SET title = $1, body = $2 WHERE id = $3 RETURNING *',
            [title, body, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Pool.query(
            'DELETE FROM notes WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllNotes,
    createNote,
    editNote,
    deleteNote,
};
