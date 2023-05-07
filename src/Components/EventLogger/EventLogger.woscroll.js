import React, { useEffect, useRef, useState } from 'react';

const EventLoggerScroll = ({selectedTopic, searchWord, bubbleAmount}) => {
  const eventsData = useRef([]);
  const [currentTopic, setCurrentTopic] = useState(selectedTopic);
  const [currentSearchWord, setCurrentSearchWord] = useState(searchWord);
  const [currentBubbleAmount, setCurrentBubbleAmount] = useState(bubbleAmount);

  useEffect(() => {
    setCurrentTopic(selectedTopic);
    setCurrentSearchWord(searchWord); // also add anotherValue as parameter to the component and to the array in the next line.
    setCurrentBubbleAmount(bubbleAmount);
  }, [selectedTopic, searchWord, bubbleAmount]);

  const logClickEvent = (event) => {
    let word;
    let click_type = 'undefined';
    let link = '';
    // event.point.word er det ord brugeren har trykket på i bubble charten. Hvis brugeren trykker et andet sted findes point objektet ikke.
    if (event.point && event.point.word) {
      word = event.point.word;
      click_type = 'bubble';
    } else if (event.srcElement.className === 'dataItem' || event.srcElement.className === 'dataItemText') {
      word = event.target.innerText;
      click_type = 'topicsearch_dropdown';
    } else if (event.srcElement && event.srcElement.classList.contains('rc-slider')) {
      word = '';
      click_type = 'bubbleamountslider';
    } else if (event.srcElement.className === 'TopicSearchBarInput') {
      word = '';
      click_type = 'topicsearch_bar';
    } else if (event.srcElement.className === 'resetButton') {
      word = '';
      click_type = 'topicsearch_reset';
    } else if (event.srcElement.className === 'mr-sm-2 custom-search-box') {
      word = '';
      click_type = 'wordsearch_bar';
    } else if (event.target.className === 'linktext') {
      word = event.target.innerText;
      click_type = 'list_link';
      link = event.target.href;
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
      bubbleamount: currentBubbleAmount,
      list_link: link,
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
      bubbleamount: currentBubbleAmount,
      timestamp: new Date().toLocaleString()
    };
    eventsData.current.push(eventData);
  };

  const logInputChangeEvent = (event) => {
    let bar;
    if (event.srcElement.className === 'mr-sm-2 custom-search-box') {
      bar = 'wordsearchbar';
    } else if (event.srcElement.className === 'TopicSearchBarInput') {
      bar = 'topicsearchbar';
    }
    const eventData = {
      type: 'input',
      class: event.target.className,
      input: event.target.value,
      topic: currentTopic,
      searchword: currentSearchWord,
      searchbar: bar,
      bubbleamount: currentBubbleAmount,
      timestamp: new Date().toLocaleString()
    };
    eventsData.current.push(eventData);
  };

  const exportCSV = () => {
    const header = 'ID,Type,Clicktype,Clicked_word,Keypressed,X_browser,Y_browser,X_page,Y_page,ScrollDepth,Topic,Searchword,TimeStamp,Class,Input,SearchBar,BubbleAmount,Link\n';
    const csvRows = eventsData.current.map((event, index) => {
      if (event.type === 'click') {
        return `${index},${event.type},${event.clicktype},${event.word},,${event.x_browser},${event.y_browser},${event.x_page},${event.y_page},,${event.topic},${event.searchword},${event.timestamp},${event.class},,,${event.bubbleamount},${event.list_link}`;
      } else if (event.type === 'keypress') {
        return `${index},${event.type},,,${event.key},,,,,,${event.topic},,${event.timestamp},${event.class},,,${event.bubbleamount},`;
      } else if (event.type === 'input') {
        return `${index},${event.type},,,,,,,,,${event.topic},,${event.timestamp},${event.class},${event.input},${event.searchbar},${event.bubbleamount},`;
      }
    });
    const csvData = header + csvRows.join('\n');
  
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'events_withoutscroll_data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  useEffect(() => {
    document.addEventListener('click', logClickEvent);
    document.addEventListener('keydown', logKeyboardEvent);
    document.addEventListener('input', logInputChangeEvent);

    return () => {
      document.removeEventListener('click', logClickEvent);
      document.removeEventListener('keydown', logKeyboardEvent);
      document.removeEventListener('input', logInputChangeEvent);
    };
  }, [currentTopic, currentSearchWord, currentBubbleAmount]);

  return (
    <div>
      <button onClick={exportCSV}>Export Events Without Scroll to CSV</button>
    </div>
  );
};

export default EventLoggerScroll;