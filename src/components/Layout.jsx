import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </React.Fragment>
  );
}

export default Layout;
