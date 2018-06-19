import React from 'react';
const Option = props => {
  return (
    <div>{props.value}
      <button className="button button--link"
              onClick={() => {
                props.handleRemoveOption(props.id)
              }}>remove
      </button>
    </div>
  );
};

export default Option;
