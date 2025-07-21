import { MCheckbox, MMultiselect } from '@jp/material-core-master';
import { Check } from '@mui/icons-material';
import {
  Autocomplete,
  Box,
  Input,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export interface FieldsProps {
  name: string;
  type:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'date'
    | 'single-selector'
    | 'multi-selector'
    | 'checkbox'
    | 'radio';
  label: string;
  id: string;
  checked?: boolean;
  placeholder?: string;
  value: string | number | boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any } }
  ) => void;
  required?: boolean;
  disabled?: boolean;
  options?: Array<{ label: string; value: string; checked: boolean }>;
}
export type FieldsConfig = Omit<FieldsProps, 'value' | 'onChange' | 'checked'>;

const Fields = (props: FieldsProps) => {
  if (
    props.type === 'text' ||
    props.type === 'email' ||
    props.type === 'number' ||
    props.type === 'password' ||
    props.type === 'date'
  ) {
    return (
      <Box>
        <Typography variant="body1">{props.label}</Typography>
        <TextField
          variant="outlined"
          sx={{ width: '500px' }}
          name={props.name}
          type={props.type}
          id={props.id}
          placeholder={props.placeholder ? props.placeholder : ''}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
        />
      </Box>
    );
  }
  if (props.type === 'radio') {
    return (
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
    );
  }

  if (props.type === 'checkbox') {
    return (
      <MCheckbox
        label={props.label!}
        className={props.name}
        checked={props.checked}
        onChange={(e) =>
          props.onChange({
            target: {
              name: props.name,
              value: e.target.checked,
            },
          })
        }
      />
    );
  }

  if (props.type === 'single-selector') {
    return (
      <Box>
        <Typography variant="body1">{props.label}</Typography>
        <Autocomplete
          options={props.options!}
          getOptionLabel={(option: any) => option.label}
          onChange={(event: any, newValue: any) => {
            props.onChange({
              target: {
                name: props.name,
                value: newValue,
              },
            });
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder={props.placeholder} />
          )}
        />
      </Box>
    );
  }

  if (props.type === 'multi-selector') {
    return (
      <Box>
        <Typography variant="body1">{props.label}</Typography>
        <MMultiselect
          options={props.options!}
          // getOptionLabel={(option: any) => option.label}
          onChange={(selectedOptions) => {
            props.onChange({
              target: {
                name: props.name,
                value: selectedOptions,
              },
            });
          }}
        />
      </Box>
    );
  }
};

export default Fields;
