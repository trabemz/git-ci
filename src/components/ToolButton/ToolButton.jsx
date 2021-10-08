import React from 'react';
import {PropTypes} from 'prop-types';

import './ToolButton.css';

export function ToolButton({modificator, text, handleClick = Function.prototype, children}){
  const btnModificator = modificator ? `tool-button--${modificator}` : '';
  return <button type='button' className={`button tool-button ${btnModificator}`} onClick={handleClick}>
      <span className='tool-button__icon-container'>
        {children}
      </span>
      <span className='tool-button__text'>
        {text}
      </span>
    </button>
}

ToolButton.propTypes = {
  modificator: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.node
}