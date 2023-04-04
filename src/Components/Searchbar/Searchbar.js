import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar(props) {
  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search logic here
  };

  return (
    <Form onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={props.handleInputChange}
        value={props.searchQuery}
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;