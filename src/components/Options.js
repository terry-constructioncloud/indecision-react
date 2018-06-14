import React from 'react';
import Option from './Option';
const Options = props => {
  return (
    <div>
      {
        props.options.map((option, index) => (
            <Option key={index} value={option} id={index}
                    handleRemoveOption={props.handleRemoveOption}/>
          )
        )
      }
      <button onClick={props.handleRemoveAll}>Remove all</button>
    </div>
  );
};

export default Options;
