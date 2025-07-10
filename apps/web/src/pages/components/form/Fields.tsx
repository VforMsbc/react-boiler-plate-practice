import { Input } from '@mui/material';
import React from 'react';

export interface FieldsProps {
  name?: string;
  type?: string;
  label?: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  options?: Array<{ label: string; value: string | number }>;
}

const Fields = (props: FieldsProps) => {
  return (
    <Input
      name={props.name}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      disabled={props.disabled}
    />
  );
};

export default Fields;
