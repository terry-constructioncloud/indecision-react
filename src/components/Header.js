import React from 'react';
const Header = props => {
  return (
    <div>
      <p>{props.title}</p>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: 'foo'
};

export default Header;
