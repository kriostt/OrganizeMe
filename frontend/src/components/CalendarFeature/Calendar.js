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
  const [formData, setFormData] = useState({ id: null, title: '', date: '' });

  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (formData.id !== null) {
      // If formData has an id, update the existing event
      const updatedEvents = events.map(event =>
        event.id === formData.id ? { ...event, title: formData.title, date: formData.date } : event
      );
      setEvents(updatedEvents);
    } else {
      // Otherwise, add a new event
      const newEvent = { id: events.length + 1, title: formData.title, date: formData.date };
      setEvents([...events, newEvent]);
    }
    setFormData({ id: null, title: '', date: '' });
  };

  const handleEventDelete = id => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleEventEdit = (id, title, date) => {
    setFormData({ id, title, date });
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
        <button type="submit">{formData.id !== null ? 'Update Event' : 'Add Note'}</button>
      </form>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventContent={(eventInfo) => (
          <div>
            <p>{eventInfo.event.title}</p>
            <button onClick={() => handleEventEdit(eventInfo.event.id, eventInfo.event.title, eventInfo.event.start)}>Edit</button>
            <button onClick={() => handleEventDelete(eventInfo.event.id)}>Delete</button>
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;
