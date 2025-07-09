import { Box, Button, Input, Typography } from '@mui/material';
import React from 'react';
import { Form } from 'react-router-dom';

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
  inputFields?: InputProps[];
  onsubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormComponent = ({ formTitle, inputFields, onsubmit }: FormComponentProps) => {
  return (
    <Box>
      <Typography>{formTitle}</Typography>
      <form onSubmit={onsubmit}>
        <Box>
          {inputFields?.map((field, index) => (
            
            <Input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              required={field.required}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
          <Button />
        </Box>
      </form>
    </Box>
  );
};

export default FormComponent;
