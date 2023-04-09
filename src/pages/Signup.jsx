import React from 'react';
import signupImage from '../assets/images/signup.svg';
import Illustration from '../components/Illustration';
import SignupForm from '../components/SignupForm';
import styles from '../styles/Column.module.css';

function Signup() {
  return (
    <React.Fragment>
      <h1>Create an account</h1>
      <div className={styles.column}>
        <Illustration illustration={signupImage} alt="Signup" />
        <SignupForm />
      </div>
    </React.Fragment>
  );
}

export default Signup;
