import React from 'react';
const ErrorMessage = (props) => {
  return (
    props.message ? <p>{props.message}</p> : ''
  );
};

export default ErrorMessage;
