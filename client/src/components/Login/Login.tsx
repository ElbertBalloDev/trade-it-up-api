import React, { useState } from 'react';
import './Login.css';
import { Auth } from 'aws-amplify';

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
    <div className='form-style-6'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='field1'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Your Email'
        />
        <input
          type='password'
          name='field2'
          value={[password]}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button disabled={!validateForm()} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
