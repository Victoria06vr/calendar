
import '../App.css'
import EventList from '../components/EventList';
import SearchField from '../components/SearchField';
import { useState, useEffect } from 'react';
import { useEvents } from '../EventsContext';


function DefaultPage() {
  const { events, setEvents } = useEvents();

  // Load saved filter text from localStorage on initial render
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });

  // Save filterText to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("filterText", filterText)
  }, [filterText])

  // Sort the events by date
  const sortedEvents = events.slice().sort((a, b) =>
    a.date.localeCompare(b.date, "en", { sensitivity: "base" })
  );

  // Filter events based on the user input
  const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(filterText.toLowerCase())
  );

  // Filter input handler
  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  }

  return (
    <>
      {filteredEvents.length > 0 ? (
        <div>
          <SearchField handleInput={handleInputChange} filterText={filterText} />
          <EventList events={filteredEvents} setEvents={setEvents} />
        </div>
      ) : (
        <p>Sorry, nothing to show...</p>
      )}
    </>
  );
}

export default DefaultPage;
