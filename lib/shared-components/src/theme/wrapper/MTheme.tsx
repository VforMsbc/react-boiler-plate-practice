import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeMode } from '../index';
import { deepmerge } from '@mui/utils';
import { getMUIComponents } from '../utils/getMUIComponents';
import { getMUIPalette } from '../utils/getMUIPalette';

import { themes } from '../utils';

interface MProps {
  themeMode: ThemeMode;
  children?: React.ReactNode;
}

const MTheme: React.FC<MProps> = ({ themeMode, children }: MProps) => {
  const mTheme = useMemo(() => {
    let theme = themes[themeMode];
    theme = deepmerge(theme, getMUIPalette(themeMode, theme));
    theme = deepmerge(theme, getMUIComponents(theme));
    return theme;
  }, [themeMode]);

  return (
    <ThemeProvider theme={mTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default MTheme;
