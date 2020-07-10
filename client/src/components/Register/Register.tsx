import React, { useState, useContext } from 'react';
import { Input, Button, FormContainer } from '../UI';
import { Confirmation } from '.';
import { AppContext, INewUser } from '../../Context/Context';

const Register = () => {
  const { newUser, register, login } = useContext(AppContext);
  const [user, setUser] = useState<INewUser>(newUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (
        user &&
        user.password.length > 0 &&
        user.confirmPassword.length > 0 &&
        user.password === user.confirmPassword
      ) {
        await register(user);
      } else {
        alert(`passwords doesnt match`);
      }
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
      {user.confirmationCode.length > 0 ? (
        <Confirmation newUser={user} login={login} />
      ) : (
        <FormContainer>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              placeholder='Your Email'
              value={user.email}
              name='email'
              type='email'
            />
            <Input
              type='password'
              name='password'
              value={user.password}
              onChange={handleChange}
              placeholder='Password'
            />
            <Input
              type='password'
              name='confirmPassword'
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
            <Button
              fullWidth={true}
              disabled={
                user.email.length === 0 ||
                user.password.length === 0 ||
                user.confirmPassword.length === 0
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
