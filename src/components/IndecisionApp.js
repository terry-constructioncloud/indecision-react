import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import ErrorMessage from './ErrorMessage';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {options: props.options};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }

  saveData() {
    const options = this.state.options;
    localStorage.setItem('options', JSON.stringify(options));
  }

  loadData() {
    const optionStr = localStorage.getItem('options');
    if (optionStr) {
      this.setState(() => ({options: JSON.parse(optionStr)}));
    }
  }

  componentDidMount() {
    console.log('component did mount!');
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update', prevProps, prevState);
    if (prevState.options.length !== this.state.options.length) {
      this.saveData();
    }
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  handleRemoveAll() {
    this.setState(_ => ({options: []}))
  }

  handleAdd(option) {
    if (!option) {
      this.setState(() => ({error: 'Enter valid value to add item'}));
    } else {
      this.setState(({options}) => ( {options: options.concat(option), error: ''}));
    }
  }

  handleRemoveOption(optionId) {
    this.setState(prev => {
      const options = prev.options.slice();
      options.splice(optionId, 1)
      return {options};
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
  }

  render() {
    const subTitle = 'test2';
    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}
                 handleRemoveOption={this.handleRemoveOption}/>
        <AddOption handleAdd={this.handleAdd}/>
        <ErrorMessage message={this.state.error}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [1, 2, 3]
};

