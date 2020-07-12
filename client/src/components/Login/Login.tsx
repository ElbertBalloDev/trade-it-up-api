import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/Context';
import { useHistory } from 'react-router-dom';
import { Input, Button, FormContainer } from '../UI';
import Spinner from '../Spinner';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const { login, addToast } = useContext(AppContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      addToast({ type: 'success', message: 'Logged In' });
      history.push('/');
    } catch (e) {
      setLoading(false);
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
        {loading ? (
          <Spinner />
        ) : (
          <Button
            fullWidth={true}
            disabled={email.length === 0 || password.length === 0}
            uppercase={true}
            type='submit'
          >
            Login
          </Button>
        )}
      </form>
    </FormContainer>
  );
};

export default Login;
