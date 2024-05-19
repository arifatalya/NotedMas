import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegSave } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import createNote from "./CreateNote.jsx";
import useCreateDate from "../components/useCreateDate";

const editNote = ({notes, setNotes}) => {
    const {id} = useParams();
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = useState(note.title);
    const [body, setBody] = useState(note.body);
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        if (title && body) {
            const newNote = {note: title, body: body, date: date};

            const newNotes = notes.map(item => {
                if (item.id === id) {
                    item = newNote;
                }
                return item;
            });
            setNotes(newNotes);
        }
        navigate('/');
    }
    const handleDeleteNote = (e) => {
        const newNotes = notes.filter(item => item.id !== id);

        setNotes(newNotes);
        navigate('/');
    }
    return (
        <div className="p-6 max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-md">
            <header className="flex justify-between items-center mb-6">
                <Link to="/" className="text-xl text-gray-700"><IoIosArrowBack /></Link>
                <div>
                    <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={handleForm}><FaRegSave /></button>
                    <button className="p-2 bg-red-500 text-white rounded" onClick={handleDeleteNote}><RiDeleteBack2Line /></button>
                </div>
            </header>
            <div className="flex flex-col">
                <form className="space-y-4" onSubmit={handleForm}>
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
                        className="w-full p-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </form>
            </div>
        </div>
    );
}

export default editNote;
