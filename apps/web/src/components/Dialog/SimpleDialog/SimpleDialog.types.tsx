import { Breakpoint } from '@mui/material';
import { ReactNode } from 'react';

export interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
  title?: string | null;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  logo?: ReactNode;
  showTitleWithCross?: boolean;
  maxWidth?: Breakpoint | false;
}
