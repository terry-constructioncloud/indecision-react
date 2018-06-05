class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {options: [11, 2, 3]};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
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

  render() {
    const title = 'test';
    const subTitle = 'test2';
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={this.state.options} onRemoveAll={this.handleRemoveAll}/>
        <AddOption onAdd={this.handleAdd}/>
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

  handlePick() {
    console.log(1)
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick} type="button">What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.options.map((option, index) => <Option key={index} value={option}/>)}
        <button onClick={this.props.onRemoveAll}>Remove all</button>
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
    this.props.onAdd(option);
    e.target.elements.option.value = '';
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
