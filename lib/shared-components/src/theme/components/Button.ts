/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    elevated: true;
    filled: true;
    tonal: true;
    outlined: true;
    text: true;
    contained: true;
    gradient: true;
  }
  interface ButtonPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface MButton {
  MuiButton: {
    defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
    variants?: ComponentsVariants['MuiButton'];
  };
}

export const getButton = (theme: Theme): MButton => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          minWidth: '150px',
          // gap: "10px",
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: '50%',
            minWidth: '1em',
            minHeight: '1em',
          },
        },
        startIcon: {
          marginRight: '10px',
        },
        endIcon: {
          margin: 0,
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            borderRadius: '10px',
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            minWidth: '130px',
            fontSize: '12px',
            '&:has(>svg)': {
              padding: '8px',
              borderRadius: '50%',
              minWidth: '1em',
              minHeight: '1em',
            },
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              // backgroundColor: '#2E5A88',
              // backgroundColor: '#2E5A88',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: '500',
            fontSize: '13px',
            // backgroundColor: theme.palette.info.main,
            borderColor: theme.palette.primary.main,

            minWidth: '130px',
            '&:hover': {
              backgroundColor: theme.palette.info.main,
            },
            '&:has(>svg)': {
              padding: '8px',
              borderRadius: '50%',
              minWidth: '1em',
              minHeight: '1rem',
            },
          },
        },
        {
          props: { variant: 'text', color: 'info' },
          style: {
            borderRadius: '10px',
            textTransform: 'none',
            // backgroundColor: '#428bca',
            background: theme.palette.grey[300] || 'gray',
            cursor: 'default',
            color: 'white',
            minWidth: '130px',
            fontSize: '12px',
            '&:has(>svg)': {
              padding: '8px',
              borderRadius: '50%',
              minWidth: '1em',
              minHeight: '1em',
            },
            '&:hover': {
              // backgroundColor: '#428bca',
              background: theme.palette.grey[300] || 'grey',
            },
          },
        },
        {
          props: { variant: 'text', color: 'secondary' },
          style: {
            borderRadius: '10px',
            textTransform: 'none',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            minWidth: '60px',
            fontSize: '12px',
            float: 'right',
            margin: '10px 0px 10px 0px',
            '&:has(>svg)': {
              padding: '8px',
              borderRadius: '50%',
              minWidth: '1em',
              minHeight: '1em',
            },
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: 'text', color: 'info' },
          style: {
            borderRadius: '10px',
            textTransform: 'none',
            // backgroundColor: '#428bca',
            background: theme.palette.grey[300] || 'gray',
            cursor: 'default',
            color: 'white',
            minWidth: '130px',
            fontSize: '12px',
            '&:has(>svg)': {
              padding: '8px',
              borderRadius: '50%',
              minWidth: '1em',
              minHeight: '1em',
            },
            '&:hover': {
              // backgroundColor: '#428bca',
              background: theme.palette.grey[300] || 'grey',
            },
          },
        },
      ],
    },
  };
};
