import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { INewUser } from '../../Context/Context';
import { FormContainer, Button, Input } from '../UI';
import { Auth } from 'aws-amplify';

interface IProps {
  newUser: INewUser;
  login: (email: string, password: string) => Promise<void>;
}

const Confirmation: React.FC<IProps> = ({ newUser, login }) => {
  const [confirmationCode, setConfirmationCode] = useState<string>('');
  const history = useHistory();

  const handleConfirmationCode = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(newUser.email, confirmationCode);
      await login(newUser.email, newUser.password);
      history.push('/');
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <FormContainer>
      <h1>Confirmation Code</h1>
      <form onSubmit={handleConfirmationCode}>
        <Input
          onChange={(e) => setConfirmationCode(e.target.value)}
          placeholder='Confirmation Code'
          value={confirmationCode}
          name='confirmationCode'
          type='text'
        />
        <Button
          fullWidth={true}
          disabled={confirmationCode.length !== 0}
          uppercase={true}
          type='submit'
        >
          Register
        </Button>
      </form>
    </FormContainer>
  );
};

export default Confirmation;
