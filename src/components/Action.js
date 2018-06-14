import React from 'react';
const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick} type="button">What should I do?
      </button>
    </div>
  );
};
export default Action;
