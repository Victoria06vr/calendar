
import '../App.css'
import EventList from '../components/EventList';
import myimage from "../assets/calendarimage.jpg";
import SearchField from '../components/SearchField';
import { useState, useEffect } from 'react';

const events = [
  {id: 1, title: "Meeting", date: "2026-04-22", description: "About party in Aarhus"},
  {id: 2, title: "Workshop", date: "2026-03-23", description: "Designing a new app"},
  {id: 3, title: "Conference5", date: "2025-01-22", description: "Annual conference in Aarhus"},
  {id: 4, title: "Training", date: "2026-09-15", description: "Software training session"},
  {id: 5, title: "Conference6", date: "2025-02-22", description: "Annual conference in Aarhus"},
  {id: 6, title: "Party", date: "2026-10-15", description: "Annual party in Aarhus"},
];


function DefaultPage() {

  // Looks for information in webstorage, if there are some,
  //filterText is equal to this value, else it is an empty string.
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });

  // Everytime the filterText variable changes, the information is saved to webstorage, with the key "filterTextStorage"

  useEffect(() => {
    localStorage.setItem("filterText", filterText)
  }, [filterText])
const sortedEvents = events.slice().sort((a, b) =>
  a.date.localeCompare(b.date, "en", { sensitivity: "base" })
);

// Filter events based on the user input
const filteredEvents = sortedEvents.filter(event =>
  event.title.toLowerCase(). includes(filterText.toLowerCase())
);

// Cange the value of variable "filtertext"
// makes the component re-render.
//function handleInputChnage (event) {...
const handleInputChange = (event) => {
  setFilterText(event.target.value);
}

  return (
    <div>
      <img src={myimage} alt="This is a picture of a calendar"/>
      <SearchField handleinput={handleInputChange} filter={filterText} />
       <EventList events ={filteredEvents}/>
    </div>
  )
}

export default DefaultPage;
