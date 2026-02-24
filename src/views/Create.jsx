import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../EventsContext";

export default function Create() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const { addEvent } = useEvents();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !date) return;
        addEvent({ title, date, description });
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <h1 className="page-title">Create event</h1>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" className="input"/> 
                    <input value={date} onChange={e => setDate(e.target.value)} type="date" placeholder="Date" className="input"/>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} className="textarea" placeholder="description"/>
                    <button className="button" type="submit">Save</button>
                </form>
            </div>

        </>
    )
}