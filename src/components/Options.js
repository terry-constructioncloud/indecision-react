import React from 'react';
import Option from './Option';
const Options = props => {
  return (
    <div>
      <button className="button button--link" onClick={props.handleRemoveAll}>Remove all</button>
      {
        props.options.map((option, index) => (
            <Option key={index} value={option} id={index}
                    handleRemoveOption={props.handleRemoveOption}/>
          )
        )
      }
    </div>
  );
};

export default Options;
