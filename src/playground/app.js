class IndecisionApp extends React.Component {
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

const Header = props => {
  return (
    <div>
      <p>{props.title}</p>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: 'foo'
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
      {
        props.options.map((option, index) => (
            <Option key={index} value={option} id={index}
                    handleRemoveOption={props.handleRemoveOption}/>
          )
        )
      }
      <button onClick={props.handleRemoveAll}>Remove all</button>
    </div>
  );
};

const Option = props => {
  return (
    <div>{props.value}
      <button onClick={() => {
        props.handleRemoveOption(props.id)
      }}>x
      </button>
    </div>
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
ReactDOM.render(<IndecisionApp options={['one', 'two']}/>, appRoot);
