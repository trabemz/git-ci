import { React } from 'react';
import { PropTypes } from 'prop-types';

import './Copyright.css';

export function Copyright(props) {
  const { children, className } = props;
  const currYear = new Date().getFullYear();
  return (
    <span className={`copyright ${className}`}>
      © {currYear} {children}
    </span>
  );
}

Copyright.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
