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
  const [editEventId, setEditEventId] = useState(null); // Track the event being edited
  const [editedEvent, setEditedEvent] = useState({}); // Track edited event data

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
    setEditEventId(eventId); // Set the event being edited
    const event = events.find(event => event.id === eventId);
    // Set the edited event data
    setEditedEvent({ ...event });
  };

  const handleDeleteClick = eventId => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    setEvents(updatedEvents);
    setEditEventId(null); // Clear edit event ID if deleted
  };

  const handleEditSubmit = () => {
    const updatedEvents = events.map(event =>
      event.id === editEventId ? editedEvent : event
    );
    setEvents(updatedEvents);
    setEditEventId(null); // Reset edit event ID
    setEditedEvent({}); // Clear edited event data
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
        eventContent={({ event }) =>
          renderEventContent(event, handleDeleteClick, setEditEventId)
        }
      />
      {editEventId !== null && (
        <EditEventModal
          editedEvent={editedEvent}
          setEditedEvent={setEditedEvent}
          onClose={() => setEditEventId(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

// Custom event content to include delete and edit buttons
const renderEventContent = (event, handleDeleteClick, setEditEventId) => {
  return (
    <div>
      <b>{event.title}</b>
      <div>
        <button onClick={() => handleDeleteClick(event.id)}>Delete</button>
        <button onClick={() => setEditEventId(event.id)}>Edit</button>
      </div>
    </div>
  );
};

// Edit Event Modal Component
const EditEventModal = ({ editedEvent, setEditedEvent, onClose, onSubmit }) => {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setEditedEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={editedEvent.title || ''}
            onChange={handleInputChange}
            placeholder="Enter title"
          />
          <input
            type="date"
            name="date"
            value={editedEvent.date || ''}
            onChange={handleInputChange}
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Calendar;

