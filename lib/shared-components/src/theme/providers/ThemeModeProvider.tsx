import { FC, createContext } from 'react';
import { ThemeMode } from '../types/ThemeMode';
import { useThemeMode } from '../hooks/useThemeMode';
import { createTheme } from '@mui/material';

export type ThemeModeContextType = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

export interface ThemeModeProviderProps {
  children?: React.ReactNode;
}
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export const ThemeModeContext = createContext<ThemeModeContextType>({
  themeMode: 'dark',
  toggleTheme: () => {},
  setThemeMode: (mode: ThemeMode) => {!mode},
});

const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const [themeMode, toggleTheme, setThemeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
