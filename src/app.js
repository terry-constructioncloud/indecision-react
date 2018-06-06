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
    if (!option) {
      this.setState(() => {
        return {error: 'Enter valid value to add item'};
      });
    } else {
      this.setState(({options}) => {
        return {options: options.concat(option), error: ''};
      });
    }

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
        <ErrorMessage message={this.state.error}/>
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.subTitle}</p>
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick} type="button">What should I do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      {props.options.map((option, index) => <Option key={index} value={option}/>)}
      <button onClick={props.handleRemoveAll}>Remove all</button>
    </div>
  );
};

const Option = props => {
  return (
    <div>{props.value}</div>
  );
};

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

const ErrorMessage = (props) => {
  return (
    props.message ? <p>{props.message}</p> : ''
  );
};

const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp/>, appRoot);
