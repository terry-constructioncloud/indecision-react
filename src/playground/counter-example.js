class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      count: 0,
      visible: true
    };
  }

  toggleVisibility() {
    this.setState(prev => {
      return {visible: !prev.visible};
    });
  }

  addOne() {
    this.setState((prevState) => {
      return {count: prevState.count + 1};
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {count: prevState.count - 1}
    });
  }

  reset() {
    this.setState(() => {
      return {count: 0};
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide' : 'Show'}</button>
        {
          this.state.visible &&
          (
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick={this.addOne}>+1</button>
              <button onClick={this.minusOne}>-1</button>
              <button onClick={this.reset}>Reset</button>
            </div>
          )
        }
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));
