import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log('[Modal] Did Update');
  }

  render() {
    return (
      <Auxillary>
        <Backdrop show={this.props.show} close={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Auxillary>
    );
  }
}

export default Modal;
