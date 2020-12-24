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
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputEl = (
        <textarea
          className={styles.InputEl}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputEl = (
        <select
          className={styles.InputEl}
          value={props.value}
          onChange={props.changed}
        >
          {props.elConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputEl = (
        <input
          className={styles.InputEl}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
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
