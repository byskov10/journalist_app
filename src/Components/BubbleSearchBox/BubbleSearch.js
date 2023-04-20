import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './BubbleSearch.css';

function BubbleSearchBox(props) {
  const [query, setQuery] = useState('');


  return (
      <FormControl type="text" placeholder="Søg efter et ord.." className="mr-sm-2 custom-search-box" />
  );
}

export default BubbleSearchBox;
