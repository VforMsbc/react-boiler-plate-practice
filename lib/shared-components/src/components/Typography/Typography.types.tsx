import { SxProps, TypographyProps } from '@mui/material';

export interface ITypographyProps {
  variant: TypographyProps['variant'];
  label: string;
  color?: TypographyProps['color'];
  style?: SxProps;
  id?: string;
}
