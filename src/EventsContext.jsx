import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext(null);

const defaultEvents = [
  {id: 1, title: "Meeting", date: "2026-04-22", description: "About party in Aarhus"},
  {id: 2, title: "Workshop", date: "2026-03-23", description: "Designing a new app"},
  {id: 3, title: "Conference5", date: "2025-01-22", description: "Annual conference in Aarhus"},
  {id: 4, title: "Training", date: "2026-09-15", description: "Software training session"},
  {id: 5, title: "Conference6", date: "2025-02-22", description: "Annual conference in Aarhus"},
  {id: 6, title: "Party", date: "2026-10-15", description: "Annual party in Aarhus"},
];

export function EventsProvider({ children }){
  const [events, setEvents] = useState(() => {
    try {
      const raw = localStorage.getItem("events");
      return raw ? JSON.parse(raw) : defaultEvents;
    } catch {
      return defaultEvents;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("events", JSON.stringify(events));
    } catch {}
  }, [events]);

  const addEvent = (event) => {
    setEvents(prev => {
      const nextId = prev.length ? Math.max(...prev.map(e => e.id)) + 1 : 1;
      return [...prev, { ...event, id: nextId }];
    });
  };

  const value = { events, setEvents, addEvent };

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>;
}

export function useEvents(){
  return useContext(EventsContext);
}

export default EventsContext;
