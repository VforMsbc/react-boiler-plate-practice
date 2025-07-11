import { Box, Checkbox, Input, Radio, Typography } from '@mui/material';
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
  options?: Array<{ label: string; value: string | number; checked: boolean }>;
}

const Fields = (props: FieldsProps) => {
  return (
    <>
      <Box>
        <Typography variant="body1">{props.label}</Typography>
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
      </Box>

      {props.type === 'radio' && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {props.options?.map((option, idx) => (
            <label key={idx}>
              <Radio
                name={props.name}
                value={option.value}
                checked={props.value === option.value}
                onChange={props.onChange}
              />

              {option.label}
            </label>
          ))}
        </Box>
      )}
    </>
  );
};

export default Fields;
