import React from 'react';
import styles from '../styles/Account.module.css';

function Account() {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}

export default Account;
