import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  let inputEl = null;

  switch (props.elType) {
    case 'input':
      inputEl = (
        <input
          className={styles.InputEl}
          {...props.elConfig}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputEl = (
        <textarea
          className={styles.InputEl}
          {...props.elConfig}
          value={props.value}
        />
      );
      break;
    default:
      inputEl = (
        <input
          className={styles.InputEl}
          {...props.elConfig}
          value={props.value}
        />
      );
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
