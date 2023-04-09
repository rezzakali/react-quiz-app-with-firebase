import React from 'react';
import loginImage from '../assets/images/login.svg';
import Illustration from '../components/Illustration';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Column.module.css';

function Login() {
  return (
    <React.Fragment>
      <h1>Login to your account</h1>
      <div className={styles.column}>
        <Illustration illustration={loginImage} alt="Login" />
        <LoginForm />
      </div>
    </React.Fragment>
  );
}

export default Login;
