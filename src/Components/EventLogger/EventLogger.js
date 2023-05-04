import React, { useEffect, useRef, useState } from 'react';

const EventLogger = ({selectedTopic, searchWord}) => {
  const eventsData = useRef([]);
  const [currentTopic, setCurrentTopic] = useState(selectedTopic);
  const [currentSearchWord, setCurrentSearchWord] = useState(searchWord);

  useEffect(() => {
    setCurrentTopic(selectedTopic);
    setCurrentSearchWord(searchWord); // also add anotherValue as parameter to the component and to the array in the next line.
  }, [selectedTopic, searchWord]);

  const logClickEvent = (event) => {
    let word;
    let click_type = 'undefined';
    // event.point.word er det ord brugeren har trykket på i bubble charten. Hvis brugeren trykker et andet sted findes point objektet ikke.
    if (event.point && event.point.word) {
      word = event.point.word;
      click_type = 'bubble_click';
    } else if (event.srcElement.className === 'dataItem' || event.srcElement.className === 'dataItemText') {
      word = event.target.innerText;
      click_type = 'topicsearch_dropdown'
    }
    const eventData = {
      type: 'click',
      clicktype: click_type,
      x_browser: event.clientX,
      y_browser: event.clientY,
      x_page: event.pageX,
      y_page: event.pageY,
      word: word,
      class: event.target.className,
      topic: currentTopic,
      searchword: currentSearchWord,
      timestamp: new Date().toLocaleString()
    };
    console.log(event)
    eventsData.current.push(eventData);
  };

  const logKeyboardEvent = (event) => {
    const eventData = {
      type: 'keypress',
      key: event.key,
      class: event.target.className,
      topic: currentTopic,
      searchword: currentSearchWord,
      timestamp: new Date().toLocaleString()
    };
    eventsData.current.push(eventData);
  };

  const logInputChangeEvent = (event) => {
    const eventData = {
      type: 'input',
      class: event.target.className,
      input: event.target.value,
      topic: currentTopic,
      searchword: currentSearchWord,
      timestamp: new Date().toLocaleString()
    };
    eventsData.current.push(eventData);
  };

  const logScrollEvent = (event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    const eventData = {
      type: 'scroll',
      depth: scrollPercentage.toFixed(2),
      topic: currentTopic,
      timestamp: new Date().toLocaleString()
    };
    console.log(eventData);
    eventsData.current.push(eventData);
  };

  const exportCSV = () => {
    const header = 'ID,Type,Clicktype,Clicked_word,Keypressed,X_browser,Y_browser,X_page,Y_page,ScrollDepth,Topic,Searchword,TimeStamp,Class,Input\n';
    const csvRows = eventsData.current.map(event => {
      if (event.type === 'click') {
        return `,${event.type},${event.clicktype},${event.word},,${event.x_browser},${event.y_browser},${event.x_page},${event.y_page},,${event.topic},${event.searchword},${event.timestamp},${event.class},`;
      } else if (event.type === 'keypress') {
        return `,${event.type},,,${event.key},,,,,,${event.topic},${event.searchword},${event.timestamp},${event.class},`;
      } else if (event.type === 'input') {
        return `,${event.type},,,,,,,,,,,${event.timestamp},${event.class},${event.input}`;
      } else {
        return `,${event.type},,,,,,,,${event.depth},,,${event.timestamp},,`;
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
    document.addEventListener('input', logInputChangeEvent);
    document.addEventListener('scroll', logScrollEvent);

    return () => {
      document.removeEventListener('click', logClickEvent);
      document.removeEventListener('keydown', logKeyboardEvent);
      document.removeEventListener('input', logInputChangeEvent);
      document.addEventListener('scroll', logScrollEvent);
    };
  }, [currentTopic, currentSearchWord]);

  return (
    <div>
      <button onClick={exportCSV}>Export Events to CSV</button>
    </div>
  );
};

export default EventLogger;