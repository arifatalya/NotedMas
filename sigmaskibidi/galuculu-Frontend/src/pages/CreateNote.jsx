import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import {useState} from "react";
import {v4 as uuid} from 'uuid';
import useCreateDate from "../components/useCreateDate";

const createNote = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const date = useCreateDate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && body) {
            const note = {id: uuid(), title: title, body: body, date: date};
            console.log(note);
        }
    }
    return (
        <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
            <header className="flex justify-between items-center mb-6">
                <Link to="/" className="text-xl text-gray-700"><IoIosArrowBack /></Link>
                <div>
                    <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={createNote}><FaRegSave /></button>
                </div>
            </header>
            <div className="flex flex-col">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        className="w-full p-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        rows="30"
                        placeholder="Start writing..."
                        value={body} onChange={(e) => setBody(e.target.value)}
                        className="w-full p-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                    </textarea>
                </form>
            </div>
        </div>
    );
}

export default createNote;
