import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';

const topBar: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  // bgcolor: '#FFF',
  boxShadow:
    '0px 1px 2px 0px rgba(21, 30, 40, 0.08), 0px 2px 4px 0px rgba(13, 23, 33, 0.08)',
  p: 2,
  top: 0,
  zIndex: 2,
  left: 0,
};

const topBarTypo: CSSProperties = {
  textTransform: 'capitalize',
  fontWeight: 600,
  lineHeight: '24px',
  marginLeft: '10px',
};

const topBarIcon: CSSProperties = {
  height: '30px',
  width: '30px',
  // color: '#263D8A ',
  cursor: 'pointer',
};

const topBarAvtar: SxProps = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
};

const topBarContainer: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

export { topBar, topBarTypo, topBarIcon, topBarAvtar, topBarContainer };
