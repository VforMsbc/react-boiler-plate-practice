import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material';

interface MTablecell {
  MuiTableCell: {
    defaultProps?: ComponentsProps['MuiTableCell'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableCell'];
    variants?: ComponentsVariants['MuiTableCell'];
  };
}

export const getTableCell = (theme: Theme): MTablecell => {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          fontSize: '12px',
          p: '2px',
          color: theme.palette.text.primary,
          background: theme.palette.background.default,
        },
        body: () => ({
          border: `1px solid ${theme.palette.grey[200]}`,
          // border: 'none',
          textAlign: 'center',
          leadingTrim: 'both',
          textEdge: 'cap',
          fontSize: '11px',
          fontWeight: 500,
          minWidth: '120px',
          padding: '7px 9px',
        }),
        head: () => ({
          padding: '2px 9px',
          fontSize: '12px',
          fontWeight: 600,
          minWidth: '120px',
        }),
      },
      variants: [
        {
          props: { variant: 'head', color: 'primary' },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.secondary,
            //border: `1px solid ${theme.palette.primary.main}`,
            textAlign: 'center',
          },
        },
        {
          props: { variant: 'head', color: 'transparent' },
          style: {
            padding: '4px 9px',
            background: 'transparent',
            border: '0',
          },
        },
        {
          props: { variant: 'head', color: 'secondary' },
          style: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.info.dark,
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
        {
          props: { variant: 'body', color: 'primary' },
          style: {
            whiteSpace: 'wrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            textAlign: 'center',
          },
        },
        {
          props: { variant: 'body', color: 'secondary' },
          style: {
            whiteSpace: 'nowrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            padding: '7px 9px',
            borderColor: theme.palette.grey[100] ?? '#dfe5eb ',
            backgroundColor: '#d3ddeb',
            fontWeight: 600,
            textAlign: 'center',
          },
        },
        {
          props: { variant: 'body', color: 'info' },
          style: {
            whiteSpace: 'nowrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            border: `1px solid transparent`,
            textAlign: 'center',
          },
        },
        {
          props: { variant: 'head', color: 'lightgray' },
          style: {
            borderBottom: 0,
            // fontSize: '14px',
            whiteSpace: 'nowrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            textAlign: 'center',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            // backgroundColor: '#d3ddeb',
            // backgroundColor: theme.palette.background.paper,
          },
        },

        {
          props: { variant: 'body', color: 'lightgray' },
          style: {
            whiteSpace: 'nowrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            textAlign: 'center',
            // backgroundColor: '#d3ddeb',
            // backgroundColor: '#dfdddd',
            // backgroundColor: '#f1f1f1',
            backgroundColor: '#e3e3e3',
          },
        },
        {
          props: { variant: 'body', color: 'gray' },
          style: {
            whiteSpace: 'nowrap',
            leadingTrim: 'both',
            textEdge: 'cap',
            textAlign: 'center',
            backgroundColor: '#dfdddd',
            // backgroundColor: theme.palette.primary.main,
            // color: 'white',
          },
        },
        {
          props: { variant: 'body', color: 'transparent' },
          style: {
            background: 'transparent',
            minWidth: '10px !important',
            maxWidth: '10px!impotant',
            border: '0px !important',
            padding: '0px',
            bgcolor: 'transparent',
          },
        },
      ],
    },
  };
};
