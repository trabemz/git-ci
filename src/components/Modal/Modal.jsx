import {React} from 'react';
import {PropTypes} from 'prop-types';

import './Modal.css';

export function Modal(props){
  const {children} = props;
  
  return (
    <section className='modal'>
      <div className='container'>
        <div className='modal__content'>
          {children}
        </div>
      </div>
    </section>
  );
}

Modal.propTypes = {
  children: PropTypes.node
}