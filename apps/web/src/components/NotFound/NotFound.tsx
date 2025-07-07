import { Box, Typography } from '@mui/material';
import React from 'react';
import { SvgNoDataFound } from '../../assets/Svg';

interface INotFoundProps {
  title?: React.ReactNode;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
}

const NotFound = ({ title, style }: INotFoundProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
      mt={3}
      style={{ ...style }}
    >
      <Typography variant="h1" color={'grey.main'}>
        404
      </Typography>
      <Typography variant="h4" color={'grey.main'}>
        {title ? title : 'Not Found'}
      </Typography>
    </Box>
  );
};

export default NotFound;
