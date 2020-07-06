import React, { useState } from 'react';
import { Column, Input, Button, FormContainer } from '../UI';
import { API } from 'aws-amplify';
import s3Upload from '../../libs/s3Upload';

const AddProduct: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleAdd = async () => {
    try {
      setLoading(true);
      const attachment = file ? await s3Upload(file) : null;
      await API.post('tradeIns', '/product', {
        description,
        attachment
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1>Add a new product</h1>
      <Column>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setProductName(e.target.value)
          }
          placeholder='Product Name'
          value={productName}
          name='name'
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          placeholder='Description'
          value={description}
          name='description'
        />
        <Input
          type='file'
          placeholder='Add an image'
          value={description}
          name='Image'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        {loading ? (
          <div>Loading....</div>
        ) : (
          <Button
            fullWidth={true}
            uppercase={true}
            disabled={description.length === 0 && !file}
            onClick={handleAdd}
          >
            Add
          </Button>
        )}
      </Column>
    </FormContainer>
  );
};

export default AddProduct;
