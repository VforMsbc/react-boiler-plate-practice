import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  Theme,
} from '@mui/material';

interface MAutoComplete {
  MuiAutocomplete: {
    defaultProps?: ComponentsProps['MuiAutocomplete'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiAutocomplete'];
    variants?: ComponentsVariants['MuiAutocomplete'];
  };
}
export const getAutoComplete = (theme: Theme): MAutoComplete => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-input': {
            fontSize: '12px',
          },
          '& .MuiAutocomplete-paper': {
            '& .MuiAutocomplete-noOptions': {
              color: 'black ',
            },
          },
        },
      },
    },
  };
};
