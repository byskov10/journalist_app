import React, { useEffect } from 'react';

const EventLogger = () => {
  const eventsData = [];

  const logClickEvent = (event) => {
    const eventData = {
      type: 'click',
      x: event.clientX,
      y: event.clientY,
      timestamp: new Date().toLocaleString()
    };
    console.log(eventData);
    eventsData.push(eventData);
  };

  const logKeyboardEvent = (event) => {
    const eventData = {
      type: 'keypress',
      key: event.key,
      timestamp: new Date().toLocaleString()
    };
    console.log(eventData);
    eventsData.push(eventData);
  };

  const exportCSV = () => {
    const header = 'Type,Data,X,Y,TimeStamp\n';
    const csvRows = eventsData.map(event => {
      if (event.type === 'click') {
        return `${event.type},,${event.x},${event.y},${event.timestamp}`;
      } else {
        return `${event.type},${event.key},,${event.timestamp}`;
      }
    });
    const csvData = header + csvRows.join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'events_data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document.addEventListener('click', logClickEvent);
    document.addEventListener('keydown', logKeyboardEvent);

    return () => {
      document.removeEventListener('click', logClickEvent);
      document.removeEventListener('keydown', logKeyboardEvent);
    };
  }, []);

  return (
    <div>
      <button onClick={exportCSV}>Export Events to CSV</button>
    </div>
  );
};

export default EventLogger;
