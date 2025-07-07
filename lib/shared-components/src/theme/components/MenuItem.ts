import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MenuItemPopOver {
  MuiMenuItem: {
    defaultProps?: ComponentsProps['MuiMenuItem'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
    variants?: ComponentsVariants['MuiMenuItem'];
  };
}

export const getMenuItem = (): MenuItemPopOver => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          padding: '12px 12px',
          borderRadius: '12px',
          '&.Mui-selected': {
            border: '1px solid #263D8A',
            backgroundColor: '#C9DDFF',
          },
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            padding: '12px 28px',
            marginTop: '10px',
            backgroundColor: '#92a9ce29',
            minWidth: '210px',
            '&:hover': {
              backgroundColor: '#5186da33',
            },
            '&:focus': {
              backgroundColor: '#eef4fb',
            },
            '&:active': {
              backgroundColor: '#eef4fb',
            },
            '&:last-child': {
              marginTop: '70px',
              marginBottom: '10px',
            },
          },
        },
        {
          props: { color: 'lightGray' },
          style: {
            padding: '12px 28px',
            marginTop: '10px',
            backgroundColor: '#92a9ce29',
            minWidth: '210px',
            '&:hover': {
              backgroundColor: '#5186da33',
            },
            '&:focus': {
              backgroundColor: '#eef4fb',
            },
            '&:active': {
              backgroundColor: '#eef4fb',
            },
            '&:last-child': {
              marginBottom: '10px',
            },
          },
        },

        {
          props: { color: 'secondary' },
          style: {
            padding: '12px 28px',
            margin: '8px 0',
            gap: '10px',
            minWidth: '180px',
          },
        },

        {
          props: { color: 'waring' },
          style: {
            padding: '12px 28px',
            backgroundColor: '#EEF3FB',
            margin: '6px 3px',
          },
        },

        {
          props: { color: 'filterType' },
          style: {
            padding: '10px 20px',
            //backgroundColor: '#EEF3FB',
             borderRadius: '0px',
            //margin: '6px 3px',
          },
        },
      ],
    },
  };
};
