class IndecisionApp extends React.Component {
  render() {
    const title = 'test';
    const subTitle = 'test2';
    const options = [1, 2, 3];
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
    this.removeAll = this.removeAll.bind(this)
  }

  removeAll() {
    console.log(this.props.options)
  }

  render() {
    return (
      <div>
        {this.props.options.map((option, index) => <Option key={index} value={option}/>)}
        <button onClick={this.removeAll}>Remove all</button>
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
  onSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    console.log(option)
    e.target.elements.option.value = '';
  }

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
