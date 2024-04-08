import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  const [events, setEvents] = useState([
    // Sample events data (replacing it with backend later)
    { id: 1, title: 'Event 1', date: '2024-03-25' },
    { id: 2, title: 'Event 2', date: '2024-03-27' },
    { id: 3, title: 'Event 3', date: '2024-03-30' },
  ]);
  const [formData, setFormData] = useState({ title: '', date: '' });

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // Creates a new event object from the form data
    const newEvent = { id: events.length + 1, title: formData.title, date: formData.date };
    // Updates the events array with the new event
    setEvents([...events, newEvent]);
    // Clears the form data
    setFormData({ title: '', date: '' });
  };

  const handleEventClick = info => {
    const eventId = info.event.id;
    const eventIndex = events.findIndex(event => event.id === eventId);
    const updatedEvents = [...events];
    updatedEvents.splice(eventIndex, 1); // Remove the event
    setEvents(updatedEvents);
  };

  const handleDeleteClick = eventId => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleEditClick = eventId => {
    // Handle edit action here, you can open a modal or navigate to another page for editing
    console.log("Edit event with id:", eventId);
  };

  return (
    <div>
      <h2>OrganizeMe Calendar</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleFormChange}
          placeholder="Enter title"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleFormChange}
        />
        <button type="submit">Add Note</button>
      </form>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventClick={handleEventClick} // Call handleEventClick on event click
        eventContent={({ event }) => renderEventContent(event, handleDeleteClick, handleEditClick)}
      />
    </div>
  );
};

// Custom event content to include delete and edit buttons
const renderEventContent = (event, handleDeleteClick, handleEditClick) => {
  return (
    <div>
      <b>{event.title}</b>
      <div>
        <button onClick={() => handleDeleteClick(event.id)}>Delete</button>
        <button onClick={() => handleEditClick(event.id)}>Edit</button>
      </div>
    </div>
  );
};

export default Calendar;
