import React from 'react';
import styles from '../styles/Form.module.css';

function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
}

export default Form;
