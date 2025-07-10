import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import Fields from './Fields';

const formFieldsData = [
  {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    name: 'name',
    required: true,
  },
  {
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    name: 'email',
    required: true,
  },
  {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    name: 'password',
    required: true,
  },
  {
    type: 'checkbox',
    label: 'Remember Me',
    name: 'rememberMe',
    required: false,
  },
  {
    type: 'radio',
    label: 'Gender',
    name: 'gender',
    required: false,
  },
  {
    type: 'radio',
    label: 'Remember Me',
    name: 'rememberMe',
    required: false,
  },
  
];

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface FormComponentProps {
  formTitle?: string;
  inputFields?:  typeof formFieldsData;
  onsubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DynamicFormComponent = ({
  formTitle,
  inputFields,
  onsubmit,
}: FormComponentProps) => {
  const [formData, setFormData] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onsubmit?.(e);
  };
  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography>{formTitle}</Typography>
      <form onSubmit={handleSubmit}>
        {formFieldsData?.map((field, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            <Fields
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              required={field.required}
            //   options={field.options}
            />
          </Box>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default DynamicFormComponent;
