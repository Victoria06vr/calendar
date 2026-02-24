
import '../App.css'
import EventList from '../components/EventList';
import myimage from "../assets/calendarimage.jpg";
import SearchField from '../components/SearchField';
import { useState, useEffect } from 'react';
import { useEvents } from '../EventsContext';


function DefaultPage() {
  const { events } = useEvents();

  // Looks for information in webstorage, if there are some,
  //filterText is equal to this value, else it is an empty string.
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });

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

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  }

  return (
    <div>
      <div className="hero">
        <img className="hero-image" src={myimage} alt="This is a picture of a calendar"/>
        <div className="search-wrapper">
          <SearchField handleinput={handleInputChange} filter={filterText} />
        </div>
      </div>
      <EventList events ={filteredEvents}/>
    </div>
  )
}

export default DefaultPage;
