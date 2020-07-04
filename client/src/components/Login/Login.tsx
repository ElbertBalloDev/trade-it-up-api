import React, { useState } from 'react'
//import './Login.css';
import { Auth } from 'aws-amplify';

import { Input, FormButton, FormDiv } from '../UI';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 0;

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
    <FormDiv>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input onChange={e => setEmail(e.target.value)}
          placeholder='Your Email'
          value={email} 
          name='email' />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <FormButton 
          disabled={!validateForm()} 
          color="#2196f3" 
          uppercase type='submit'>
            Login
        </FormButton>
      </form>
    </FormDiv>
  );
};

export default Login;
