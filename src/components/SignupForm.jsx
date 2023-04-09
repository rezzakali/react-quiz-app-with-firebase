import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Info from '../components/Info';
import TextInput from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Password mismatch!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form style={{ heigth: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholde="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <TextInput
        type="email"
        placeholde="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholde="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholde="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Checkbox
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />

      <Button type="submit" disabled={loading}>
        <span> Submit now </span>
      </Button>

      {error && <p className="error">{error}</p>}

      <Info text="Already have an account?">
        <Link to="/login">Login</Link> instead.
      </Info>
    </Form>
  );
}

export default SignupForm;
