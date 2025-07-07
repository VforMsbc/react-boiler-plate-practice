import { Box, ContainerProps } from '@mui/material';

const AppContainer: React.FC<ContainerProps> = ({
  style,
  sx: materailStyle,
  children,
  className,
}) => {
  return (
    <Box sx={{ ...materailStyle }} className={className} style={style}>
      {children}
    </Box>
  );
};

export default AppContainer;
