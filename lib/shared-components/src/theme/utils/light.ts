import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { componentsTypography, typography } from './typography';

export const theme = createTheme({
  typography,
  palette: {
    ...palette('light'),
  },
  components: { ...componentsTypography },
});
