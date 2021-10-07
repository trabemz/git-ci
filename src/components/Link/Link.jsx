import {React} from 'react';
import {Link as ReactLink} from 'react-router-dom'
import {PropTypes} from 'prop-types';

import './Link.css';

export function Link(props) {
  const {url = '/', children, className} = props;
  return (
    <ReactLink to={url} className={`link ${className}`}>{children}</ReactLink>
  );
}

Link.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}