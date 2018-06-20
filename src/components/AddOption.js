import React from 'react';

export default class AddOption extends React.Component {

  onSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    this.props.handleAdd(option);
    e.target.elements.option.value = '';
    e.target.elements.option.focus();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-option">
        <input class="add-option__input" type="text" name="option"/>
        <button className="button" type="submit">Add Option</button>
      </form>
    );
  }
}
