import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import { useEvents } from "../EventsContext";

export default function Create() {
    const { addEvent } = useEvents();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    let navigation = useNavigate();

    function createHandler(e){
        e.preventDefault();
        addEvent({ title, date, description });
        localStorage.removeItem("filterText");
  navigation("/");
        navigation("/");
    }

    return (
        <>
        <form onSubmit={createHandler} className="form-container">
            <h2 className="titleEvent">Create new event</h2>
            <div>
                <label htmlFor="title" className="textLabel">Title:</label>
                <input type="text" id="title" name="title" className="input" value={title} required onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="date" className="textLabel">Date:</label>
                <input type="date" id="date" name="date" className="input" value={date} required onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description" className="textLabel">Description:</label>
                <textarea id="description" name="description" className="textArea" placeholder="Enter description" value={description} required onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="button">Create</button>
        </form>
        </>
    )
}