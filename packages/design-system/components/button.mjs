import React from 'react';

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
function Button({type='button', children}) {
  return (
    <button type={type}>{children}</button>
  );
}

export default Button;