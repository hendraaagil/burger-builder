import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  let inputEl = null;
  const inputStyles = [styles.InputEl];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyles.push(styles.Invalid);
  }

  switch (props.elType) {
    case 'input':
      inputEl = (
        <input
          className={inputStyles.join(' ')}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputEl = (
        <textarea
          className={inputStyles.join(' ')}
          {...props.elConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputEl = (
        <select
          className={inputStyles.join(' ')}
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
          className={inputStyles.join(' ')}
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
