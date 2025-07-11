import { Box, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import Fields, { FieldsConfig, FieldsProps } from './Fields';
//data that must be passed
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

// interface InputProps {
//   type?: string;
//   label?: string;
//   placeholder?: string;
//   name?: string;
//   required?: boolean;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
interface FormComponentProps {
  formTitle?: string;
  inputFields?: FieldsConfig[];
  onsubmit?: (formData: Record<string, any>) => void;
}

const DynamicFormComponent = ({
  formTitle,
  inputFields,
  onsubmit,
}: FormComponentProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any } }
  ) => {
    const target = e.target;
    const name = target.name;
    const value =
      (target as HTMLInputElement).type === 'checkbox'
        ? (target as HTMLInputElement).checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onsubmit?.(formData);
  };
  return (
    <Box
      sx={{
        padding: 2,
        maxWidth: 600,
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '1.5rem' }} gutterBottom>
        {formTitle}
      </Typography>
      <form onSubmit={handleSubmit}>
        {inputFields?.map((field, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            <Fields
              {...field}
              onChange={handleChange}
              value={formData[field.name || ''] || ''}
              checked={!!formData[field.name]}
              //   options={field.options}
            />
          </Box>
        ))}
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default DynamicFormComponent;
