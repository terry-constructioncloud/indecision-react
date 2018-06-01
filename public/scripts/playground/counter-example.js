'use strict';

var count = 0;

var addOne = function addOne() {
  count++;
  console.log(count);
  renderCounter();
};

var minusOne = function minusOne() {
  count--;
  console.log(count);
  renderCounter();
};

var reset = function reset() {
  count = 0;
  console.log(count);
  renderCounter();
};

var renderCounter = function renderCounter() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, document.getElementById('app'));
};

renderCounter();