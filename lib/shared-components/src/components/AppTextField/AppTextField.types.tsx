import { TextFieldProps } from '@mui/material';
import { CSSProperties } from 'react';

export type ITextFieldProps = TextFieldProps & {
  errmsg?: string;
  style?: CSSProperties;
  showPassword?: boolean;
};
