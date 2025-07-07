import { FormControl, FormHelperText } from '@mui/material';
import { TextField } from '@mui/material';
import { ITextFieldProps } from './AppTextField.types';

const AppTextField = ({ errmsg, style, ...props }: ITextFieldProps) => {
  return (
    <FormControl fullWidth>
      <TextField
        {...props}
        sx={{ ...style }}
        id={`text-field-${props.name?.toLowerCase().replace(/\s+/g, '-')}`}
      />
      {errmsg && (
        <FormHelperText id={`error-message-${props.name}`}>
          {errmsg}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default AppTextField;
