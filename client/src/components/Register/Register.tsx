import React, { useState, useContext } from 'react';
import { Input, Button, FormContainer } from '../UI';
import { Confirmation } from '.';
import { AppContext, INewUser } from '../../Context/Context';
import { Auth } from 'aws-amplify';

const Register = () => {
  const { login } = useContext(AppContext);
  const [newUser, setNewUser] = useState<INewUser>({
    email: '',
    password: '',
    confirmPassword: '',
    isConfirmed: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (
        newUser.password.length > 0 &&
        newUser.confirmPassword.length > 0 &&
        newUser.password === newUser.confirmPassword
      ) {
        await Auth.signUp(newUser.email, newUser.password);
        setNewUser({
          ...newUser,
          isConfirmed: false
        });
      } else {
        alert(`passwords doesnt match`);
      }
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
      {!newUser.isConfirmed ? (
        <Confirmation newUser={newUser} login={login} />
      ) : (
        <FormContainer>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              placeholder='Your Email'
              value={newUser.email}
              name='email'
              type='email'
            />
            <Input
              type='password'
              name='password'
              value={newUser.password}
              onChange={handleChange}
              placeholder='Password'
            />
            <Input
              type='password'
              name='confirmPassword'
              value={newUser.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
            <Button
              fullWidth={true}
              disabled={
                newUser.email.length === 0 ||
                newUser.password.length === 0 ||
                newUser.confirmPassword.length === 0
              }
              uppercase={true}
              type='submit'
            >
              Register
            </Button>
          </form>
        </FormContainer>
      )}
    </>
  );
};

export default Register;
