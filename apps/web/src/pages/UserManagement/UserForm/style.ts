import { SxProps } from '@mui/material';

const userform: SxProps = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };
};

const userform_txtField: SxProps = () => {
  return {
    display: 'flex',
    gap: 4,
  };
};

const userform_box: SxProps = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };
};

const userform_inputLabel: SxProps = () => {
  return {
    color: '#464A53',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontWeight: 500,
    fontSize: '16px',
  };
};

const userform_sideBar_checkBox: SxProps = () => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    justifyItems: 'stretch',
    gap: '10px',
    width: '100%',
    '@media (max-width: 400px)': {
      flexDirection: 'column',
      width: '100%',
    },
  };
};

const userform_checkBox: SxProps = () => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 'auto',
    width: '100%',
  };
};

const userform_typo: SxProps = () => {
  return {
    color: '#464A53',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '40px',
  };
};

const userform_button: SxProps = () => {
  return {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 2,
  };
};

const user_permission: SxProps = (child) => {
  return {
    flexGrow: 1,
    maxWidth: !child ? 'fit-content' : 'calc(15% + 100px) ',
    border: child ? '1px solid #ccc' : 'none',
    borderRadius: '10px',
    p: child ? 1 : 'none',
    height: child ? '100%' : 'none',
    minHeight: child ? '250px' : 'none',
  };
};

export {
  userform,
  userform_txtField,
  userform_box,
  userform_inputLabel,
  userform_sideBar_checkBox,
  userform_checkBox,
  userform_typo,
  userform_button,
  user_permission,
};
