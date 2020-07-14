import React, { useState, useEffect } from 'react';
import { Column, Input, Button, FormContainer } from '../UI';
import { FileUploader } from '../FileUploader';
import { API } from 'aws-amplify';
import s3Upload from '../../libs/s3Upload';

const AddProduct: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const convertToBase64 = () => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImageSrc(reader.result as string);
        };
      }
    };
    convertToBase64();
  }, [file]);

  const handleAdd = async () => {
    try {
      setLoading(true);
      const attachment = file ? await s3Upload(file) : null;
      console.log(attachment);
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
        <FileUploader
          imageSrc={imageSrc}
          handleImage={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
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
        {loading ? (
          <div>Loading....</div>
        ) : (
          <Button
            fullWidth={true}
            uppercase={true}
            disabled={description.length === 0}
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
