import React from 'react';

const Link = ({
    active,
    children,
    onClick
  }) => {
    const handleClick = e => {
      e.preventDefault();
      onClick();
    };
  
    if (active) {
      return (<span>{children}</span>);
    }
  
    return (
      <a href="#"
        onClick={handleClick}>
        {children}
      </a>
    );
  };

  export default Link;