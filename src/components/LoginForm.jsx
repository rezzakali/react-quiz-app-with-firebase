import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Info from '../components/Info';
import TextInput from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button disabled={loading} type="submit">
        <span> Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}

      <Info text={`Don't have an account? `}>
        <Link to="/signup">Signup</Link> instead.
      </Info>
    </Form>
  );
}

export default LoginForm;
