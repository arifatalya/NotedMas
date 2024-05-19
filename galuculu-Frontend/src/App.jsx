import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import dummy_notes from "./dummies.js";
import NoteItem from "./components/NoteItem.jsx";
import Navbar from "./Navbar.jsx";


const App = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Navbar/>
            <header className="mt-20 mb-6">
                <h2 className="text-3xl font-bold mb-4 text-left">Notes</h2>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        autoFocus
                        placeholder='Search Notes'
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button className='p-2 bg-blue-500 text-white rounded'>
                        <IoIosSearch />
                    </button>
                </div>
            </header>
            <div className="space-y-4">
                {
                    dummy_notes.map(note => (
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
