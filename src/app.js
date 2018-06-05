class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {options: [11, 2, 3]};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleRemoveAll() {
    this.setState(_ => {
      return {options: []};
    })
  }

  handleAdd(option) {
    this.setState(({options}) => {
      return {options: options.concat(option)};
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNum]);
  }

  render() {
    const title = 'test';
    const subTitle = 'test2';
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
        <AddOption handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick} type="button">What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => <Option key={index} value={option}/>)}
        <button onClick={this.props.handleRemoveAll}>Remove all</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
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


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);
