import { Box, Typography } from '@mui/material';

const InDevelopment = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
      mt={2}
    >
      <Typography variant="h4" color={'black'}>
        In Development
      </Typography>
    </Box>
  );
};
export default InDevelopment;
