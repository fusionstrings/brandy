import React from 'react';

function Button({type='button', children}) {
  return (
    <button type={type}>{children}</button>
  );
}

export default Button;