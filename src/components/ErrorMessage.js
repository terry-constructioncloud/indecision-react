import React from 'react';
const ErrorMessage = (props) => {
  return (
    props.message ? <p className="add-option-error">{props.message}</p> : ''
  );
};

export default ErrorMessage;
