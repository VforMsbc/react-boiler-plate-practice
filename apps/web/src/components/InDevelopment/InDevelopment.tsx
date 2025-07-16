import { Box, Typography } from '@mui/material';

const InDevelopment = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      height={'100%'}
      mt={2}
    >
      <Typography variant="h2" fontWeight={'400'} >
        In Development
      </Typography>
    </Box>
  );
};
export default InDevelopment;
