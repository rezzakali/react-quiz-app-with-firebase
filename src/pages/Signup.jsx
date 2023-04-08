import React from 'react';
import { Link } from 'react-router-dom';
import signupImage from '../assets/images/signup.svg';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import Info from '../components/Info';
import TextInput from '../components/TextInput';
import styles from '../styles/Column.module.css';
import signUpStyles from '../styles/Signup.module.css';

function Signup() {
  return (
    <React.Fragment>
      <h1>Create an account</h1>
      <div className={styles.column}>
        <Illustration illustration={signupImage} alt="Signup" />
        <Form className={signUpStyles.signup}>
          <TextInput type="text" placeholde="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholde="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholde="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholde="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms & Conditions" />

          <Button>
            <span> Submit now </span>
          </Button>

          <Info text="Already have an account?">
            <Link to="/login">Login</Link> instead.
          </Info>
        </Form>
      </div>
    </React.Fragment>
  );
}

export default Signup;
