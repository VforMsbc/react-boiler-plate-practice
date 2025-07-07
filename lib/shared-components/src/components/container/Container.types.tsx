import { SxProps } from '@mui/material';

export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  sx?: SxProps;
  className?: string;
}
