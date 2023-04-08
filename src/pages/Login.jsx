import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../assets/images/login.svg';
import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import Info from '../components/Info';
import TextInput from '../components/TextInput';
import styles from '../styles/Column.module.css';
import loginStyles from '../styles/Login.module.css';

function Login() {
  return (
    <React.Fragment>
      <h1>Login to your account</h1>
      <div className={styles.column}>
        <Illustration illustration={loginImage} alt="Login" />

        <Form className={loginStyles.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="text" placeholder="Enter password" icon="lock" />

          <Button>
            <span> Submit now</span>
          </Button>
          <Info text={`Don't have an account? `}>
            <Link to="/signup">Signup</Link> instead.
          </Info>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default Login;
