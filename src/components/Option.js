import React from 'react';
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

export default Option;
