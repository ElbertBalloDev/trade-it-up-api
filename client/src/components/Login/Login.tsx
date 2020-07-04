import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Input, Button } from '../UI';
import styled from 'styled-components';

export const FormContainer = styled.div`
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 5% auto;
  padding: 40px;
  border: 1px solid black;
`;

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
          onChange={e => setEmail(e.target.value)}
          placeholder='Your Email'
          value={email}
          name='email'
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <Button
          fullWidth={true}
          disabled={email.length === 0 || password.length === 0}
          color='#2196f3'
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
