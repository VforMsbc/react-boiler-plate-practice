/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MFormHelperText {
  MuiFormHelperText: {
    defaultProps?: ComponentsProps['MuiFormHelperText'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiFormHelperText'];
    variants?: ComponentsVariants['MuiFormHelperText'];
  };
}
export const getFormHelperText = (theme: Theme): MFormHelperText => {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.error.main,
          fontSize: '11px',
          marginLeft: '0px',
        },
      },
    },
  };
};
