import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import ErrorMessage from './ErrorMessage';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

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

  handleRemoveAll = () => {
    this.setState(_ => ({options: []}))
  };

  handleAdd = (option) => {
    if (!option) {
      this.setState(() => ({error: 'Enter valid value to add item'}));
    } else {
      this.setState(({options}) => ( {options: options.concat(option), error: ''}));
    }
  };

  handleRemoveOption = (optionId) => {
    this.setState(prev => {
      const options = prev.options.slice();
      options.splice(optionId, 1)
      return {options};
    });
  };

  handlePick = () => {
    this.setState(prevState => {
      const randomNum = Math.floor(Math.random() * prevState.options.length);
      return {selectedOption: this.state.options[randomNum]};
    });
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  render() {
    const subTitle = 'test2';
    return (
      <div>
        <Header subTitle={subTitle}/>
        <div className="container">
          <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
          <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}
                   handleRemoveOption={this.handleRemoveOption}/>
          <AddOption handleAdd={this.handleAdd}/>
          <ErrorMessage message={this.state.error}/>
        </div>
        <OptionModal handleClearSelectedOption={this.handleClearSelectedOption}
                     selectedOption={this.state.selectedOption}/>

      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [1, 2, 3]
};

