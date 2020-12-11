import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  let inputEl = null;

  switch (props.inputtype) {
    case 'input':
      inputEl = <input className={styles.InputEl} {...props} />;
      break;
    case 'textarea':
      inputEl = <textarea className={styles.InputEl} {...props} />;
      break;
    default:
      inputEl = <input className={styles.InputEl} {...props} />;
      break;
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputEl}
    </div>
  );
};

export default Input;
