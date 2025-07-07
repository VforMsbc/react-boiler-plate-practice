import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MPopOver {
  MuiMenu: {
    defaultProps?: ComponentsProps['MuiMenu'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiMenu'];
    variants?: ComponentsVariants['MuiMenu'];
  };
}

export const getMenu = (): MPopOver => {
  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: 'white',
            borderRadius: '5px',
            marginTop: '-5px ',
          },
        },
      },
      variants: [
        {
          props: { variant: 'menu', color: 'ExportPopOver' },
          style: {
            '& .MuiPaper-root': {
              minWidth: '210px',
              marginTop: '5px !important',
              padding: '10px 25px',
              borderRadius: '16px',
            },
          },
        },
        {
          props: { variant: 'menu', color: 'ProfilePopOver' },
          style: {
            '& .MuiPaper-root': {
              marginTop: '7px',
              minWidth: '210px',
              filter: 'drop-shadow(0px 2px 8px #00000052)',
              padding: '10px 25px',
              borderRadius: '16px',
            },
          },
        },
        {
          props: { variant: 'menu', color: 'waring' },
          style: {
            minWidth: '210px',
            '& .MuiPaper-root': {
              padding: '10px 25px',
              borderRadius: '16px',
              filter: 'drop-shadow(0px 2px 8px #00000052)',
              marginTop: '7px',
              minWidth: '210px',
            },
          },
        },
        {
          props: { variant: 'menu', color: 'filter' },
          style: {
            '& .MuiPaper-root': {
              padding: '3px 16px',
              // borderRadius: '16px',
              minWidth: '200px',
            },
          },
        },
      ],
    },
  };
};
