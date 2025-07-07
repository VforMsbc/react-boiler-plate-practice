/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MButtonBase {
  MuiButtonBase: {
    defaultProps?: ComponentsProps['MuiButtonBase'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButtonBase'];
    variants?: ComponentsVariants['MuiButtonBase'];
  };
}
export const getButtonBase = (theme: Theme): MButtonBase => {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          svg: {
            width: '20px',
            height: '20px',
          },
          '&.MuiCheckbox-root': {
            color: theme.palette.grey[500],
          },
        },
      },
    },
  };
};
