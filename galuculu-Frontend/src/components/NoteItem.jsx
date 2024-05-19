import React from 'react';
import { Link } from 'react-router-dom';

const noteItem = ({note}) => {
    return (
        <div className="p-4 bg-white border border-gray-300 rounded-lg shadow">
            <Link to={`/edit-note/${note.id}`} className="btn btn-sm btn-primary">
                <h4 className="text-xl font-semibold mb-2">
                    {note.title.length > 30 ? (note.title.substring(0, 30)) + '...' : note.title}
                </h4>
                <p className="text-gray-700 mb-2">
                    {note.body.length > 30 ? (note.body.substring(0, 30)) + '...' : note.body}
                </p>
                <p className="text-gray-500 text-sm">
                    {new Date(note.dateTime).toLocaleDateString()}
                </p>
            </Link>
        </div>
    )
}

export default noteItem;