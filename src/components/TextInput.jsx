import React from 'react';
import styles from '../styles/TextInput.module.css';

function TextInput({ icon, ...rest }) {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default TextInput;
