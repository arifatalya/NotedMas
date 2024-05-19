import React, { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import NoteItem from "./components/NoteItem.jsx";
import Navbar from "./Navbar.jsx";
import { getAllNotes } from "./actions/Note.actions.js"; // Import the action to fetch notes

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await getAllNotes();
            if (response.success) {
                setNotes(response.data);
            } else {
                console.error("Failed to fetch notes");
            }
        };

        fetchNotes();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Navbar />
            <header className="mt-20 mb-6">
                <h2 className="text-3xl font-bold mb-4 text-left">Notes</h2>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        autoFocus
                        placeholder='Search Notes'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button className='p-2 bg-blue-500 text-white rounded'>
                        <IoIosSearch />
                    </button>
                </div>
            </header>
            <div className="space-y-4">
                {
                    filteredNotes.map(note => (
                        <NoteItem key={note.id} note={note} />
                    ))
                }
            </div>
            <Link className="mt-4 inline-block p-2 bg-blue-500 text-white rounded" to="/">
                Back to Home
            </Link>
        </div>
    );
}

export default App;