import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { componentsTypography, typography } from './typography';

// todo It needs to come from designer
export const theme = createTheme({
  typography,
  palette: {
    ...palette('dark'),
  },
  components: { ...componentsTypography },
});
