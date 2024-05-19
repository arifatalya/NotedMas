import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import createNote from "./CreateNote.jsx";

const editNote = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
            <header className="flex justify-between items-center mb-6">
                <Link to="/" className="text-xl text-gray-700"><IoIosArrowBack /></Link>
                <div>
                    <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={createNote}><FaRegSave /></button>
                    <button className="p-2 bg-red-500 text-white rounded"><RiDeleteBack2Line /></button>
                </div>
            </header>
            <div className="flex flex-col">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus
                        className="w-full p-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        rows="30"
                        placeholder="Start writing..."
                        className="w-full p-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </form>
            </div>
        </div>
    );
}

export default editNote;
