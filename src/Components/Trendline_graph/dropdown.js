import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: null };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedOption) {
    this.setState({ selectedOption });
  }

  render() {
    const { options, title } = this.props;
    const { selectedOption } = this.state;

    return (
      <Dropdown onSelect={this.handleSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          {selectedOption || title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option, index) => (
            <Dropdown.Item eventKey={option} key={index}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropdownMenu;
