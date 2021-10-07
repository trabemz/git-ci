import React from 'react';
import {PropTypes} from 'prop-types';

import './Button.css';

export function Button({modificator, text, handleClick = Function.prototype}){
  const btnModificator = modificator ? `button--${modificator}` : '';
  return <button type='button' className={`button ${btnModificator}`} onClick={handleClick}>{text}
    </button>
}

Button.propTypes = {
  modificator: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
}