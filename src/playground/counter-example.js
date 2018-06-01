let count = 0;

const addOne = () => {
  count++;
  console.log(count);
  renderCounter();
};

const minusOne = () => {
  count--;
  console.log(count);
  renderCounter();
};

const reset = () => {
  count = 0;
  console.log(count);
  renderCounter();
};

const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, document.getElementById('app'));
};

renderCounter();
