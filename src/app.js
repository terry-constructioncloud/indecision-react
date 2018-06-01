const app = {
  title: 'title',
  subTitle: 'subTitle',
  options: []
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button disabled={app.options.length === 0} type="button" onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option, i) => <li key={i}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};
const removeAll = () => {
  app.options = [];
  renderApp();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

renderApp();
