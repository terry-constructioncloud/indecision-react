'use strict';

var app = {
  title: 'title',
  subTitle: 'subTitle',
  options: []
};
var show = true;
var toggleVisibility = function toggleVisibility() {
  show = !show;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      show ? 'Show' : 'Hide'
    ),
    show && React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        app.title
      ),
      app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
      ),
      React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options:' : 'No options'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        'What should I do?'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length === 0, type: 'button', onClick: removeAll },
        'Remove All'
      ),
      React.createElement(
        'ol',
        null,
        app.options.map(function (option, i) {
          return React.createElement(
            'li',
            { key: i },
            option
          );
        })
      ),
      React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
          'button',
          { type: 'submit' },
          'Add Option'
        )
      )
    )
  );
  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};
var removeAll = function removeAll() {
  app.options = [];
  renderApp();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

renderApp();