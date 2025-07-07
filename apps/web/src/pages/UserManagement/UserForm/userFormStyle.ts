import { SxProps } from '@mui/material';

const formDailogContainer: SxProps = () => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
  };
};

const formContainer: SxProps = () => {
  return {
    // margin: '6px',
  };
};

const userFormTextField: SxProps = () => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
  };
};
const userForm_checkbox: SxProps = () => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginTop: '13px',
  };
};

const userform_box: SxProps = () => {
  return {
    margin: '5px',
    marginBottom: '10px',
  };
};

const treeViewContainer: SxProps = () => {
  return {
    margin: '6px',
    marginLeft: '5%',
    width: '92%',
  };
};

const headStyle: SxProps = () => {
  return {
    marginLeft: '5px',
  };
};

const childStyle: SxProps = () => {
  return {
    marginLeft: '13px',
  };
};
const userform_button: SxProps = () => {
  return {
    marginTop: 3,
    position: 'sticky',
    bottom: 0,
    display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    gap: 2,
  };
};
const userform_inputLabel: SxProps = () => {
  return {
    color: '#464A53',
    leadingTrim: 'both',
    textEdge: 'cap',
    fontWeight: 500,
    fontSize: '19px',
    marginBottom: '14px',
  };
};

export {
  formDailogContainer,
  formContainer,
  userFormTextField,
  userForm_checkbox,
  userform_box,
  treeViewContainer,
  headStyle,
  childStyle,
  userform_button,
  userform_inputLabel,
};
