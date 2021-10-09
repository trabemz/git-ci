import { React } from 'react';
import { PropTypes } from 'prop-types';

import './Header.css';

export function Header({ children }) {
  return (
    <header className="header">
      <div className="container header__container">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
