// Favorites.js
import React from 'react';

const Favorites = ({ events, setEvents }) => {
  // Ensure events is not null or undefined before using map
  if (!events || events.length === 0) {
    return <div>No favorite events</div>;
  }

  const toggleFavorite = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].favorite = !updatedEvents[index].favorite;
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {events.map((event, index) => (
          event.favorite && (
            <li key={index}>
              {event.title}
              <button onClick={() => toggleFavorite(index)}>
                {event.favorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
