import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx";
import Note from "./pages/Note.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-note",
        element: <CreateNote />,
    },
    {
        path: "/edit-note/:id",
        element: <EditNote />,
    },
    {
        path: "/note",
        element: <Note />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
