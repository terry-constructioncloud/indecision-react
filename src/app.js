class Header extends React.Component {
  render() {
    return (
      <p>test</p>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button type="button">What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        <li>1</li>
      </ol>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <button type="button">Add Option</button>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options/>
    <AddOption />
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
