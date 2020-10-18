import React from 'react';

import Auxillary from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = (props) => (
  <Auxillary>
    <Backdrop show={props.show} close={props.modalClosed} />
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Auxillary>
);

export default Modal;
