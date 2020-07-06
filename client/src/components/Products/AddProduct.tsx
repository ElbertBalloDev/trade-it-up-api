import React, { useState } from 'react';
import { Column, Input, Button } from '../UI';
import { API } from 'aws-amplify';
import styled from 'styled-components';

export const FormContainer = styled.div`
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 5% auto;
  padding: 40px;
  border: 1px solid black;
`;

const AddProduct: React.FC = () => {
  const [productName, setProductName] = useState<string>('');
  
  return (
    <FormContainer>
    <Column>
      <Input
        // onChange={e => setEmail(e.target.value)}
        placeholder='Your Email'
        // value={email}
        name='email'
      />
    </Column>
    </FormContainer>
  );
};

export default AddProduct;
