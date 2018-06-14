import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    this.props.handleAdd(option);
    e.target.elements.option.value = '';
    e.target.elements.option.focus();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="option"/>
        <button type="submit">Add Option</button>
      </form>
    );
  }
}
