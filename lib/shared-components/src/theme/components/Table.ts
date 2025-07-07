import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MTablecell {
  MuiTable: {
    defaultProps?: ComponentsProps['MuiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
    variants?: ComponentsVariants['MuiTable'];
  };
}

export const getTable = (theme: Theme): MTablecell => {
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          background: `trasparent!important`,
        },
      }
    },
  };
};
