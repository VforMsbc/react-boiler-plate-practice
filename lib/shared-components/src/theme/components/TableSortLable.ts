import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MTableSortLable {
  MuiTableSortLabel: {
    defaultProps?: ComponentsProps['MuiTableSortLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableSortLabel'];
    variants?: ComponentsVariants['MuiTableSortLabel'];
  };
}

export const getTableSortLabel = (theme: Theme): MTableSortLable => {
  return {
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          fontSize: '12px',
          color: theme.palette.text.secondary,
          background:'transparent',
          '&.Mui-active':{
            color: theme.palette.grey[50] ,
          }
        },
      },
    },
  };
};
