import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'; // Adjust if needed

export const getAllNotes = async () => {
    try {
        const response = await axios.get(`${API_URL}/notes`);
        console.log("Responding notes");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const createNote = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/notes`, formData);
        console.log("Hi");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/notes/${id}`);
        console.log("Hi");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const editNote = async (id, formData) => {
    try {
        const response = await axios.put(`${API_URL}/notes/${id}`, formData);
        console.log("Hi");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};
