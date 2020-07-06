import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Input, Button, FormContainer } from '../UI';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your Email'
          value={email}
          name='email'
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <Button
          fullWidth={true}
          disabled={email.length === 0 || password.length === 0}
          uppercase={true}
          type='submit'
        >
          Login
        </Button>
      </form>
    </FormContainer>
  );
};

export default Login;
