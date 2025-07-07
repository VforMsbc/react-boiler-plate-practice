import { Backdrop, Box, Typography } from '@mui/material';
import React from 'react';
import './style.scss';

interface LoaderProps {
  isLoading: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  loaderStyle?: React.CSSProperties;
}

const FixedLoader = ({ isLoading, children }: LoaderProps) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1001,
        backdropFilter: 'blur(2px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
      open={isLoading}
    >
      <div className="loader_item"></div>
      {/* <CircularProgress color="inherit" /> */}
      {children}
    </Backdrop>
  );
};

const Loader = ({
  isLoading,
  children,
  style,
  loaderStyle = {},
}: LoaderProps) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        // zIndex: (theme) => theme.zIndex.drawer,
        backdropFilter: 'blur(3px)',
        bgcolor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex:1,
        ...style,
      }}
      open={isLoading}
    >
      {/* <CircularProgress color="inherit" /> */}
      <div className="loader_item" style={{ ...loaderStyle }}></div>
      {children}
    </Backdrop>
  );
};

const InlineLoader = ({
  containerStyle,
  style,
  text,
  classes,
}: {
  containerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  text?: string;
  classes?: string;
}) => (
  <Box
    className={`mac_loader inline_loader${classes ? classes : ''}`}
    style={containerStyle ? containerStyle : {}}
  >
    <div className="loader_item" style={style ? style : {}}></div>
    {text !== null && text ? (
      <Typography variant="h5" color={'grey.main'} className="loader_text">
        {text}
      </Typography>
    ) : (
      ''
    )}
  </Box>
);

const BtnLoader = ({
  style,
  classes,
}: {
  style?: React.CSSProperties;
  classes?: string;
}) => (
  <div
    className={`loader_item${classes ? ` ${classes}` : ''}`}
    style={{
      display: 'inline-block',
      width: '15px',
      height: '15px',
      marginRight: '5px',
      borderTop: '2px solid black',
      ...style,
    }}
  ></div>
);
export { FixedLoader, Loader, InlineLoader, BtnLoader };
