import React from 'react';
const Option = props => {
  return (
    <div className="option">
      <p class="option__text">{props.count}. {props.value}</p>
      <button className="button button--link"
              onClick={() => {
                props.handleRemoveOption(props.id)
              }}>remove
      </button>
    </div>
  );
};

export default Option;
