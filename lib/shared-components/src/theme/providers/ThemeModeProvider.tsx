import { FC, createContext } from 'react';
import { ThemeMode } from '../types/ThemeMode';
import { useThemeMode } from '../hooks/useThemeMode';

export type ThemeModeContextType = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
};

export interface ThemeModeProviderProps {
  children?: React.ReactNode;
}

export const ThemeModeContext = createContext<ThemeModeContextType>({
  themeMode: 'dark',
  toggleTheme: () => {},
  setThemeMode: (mode: ThemeMode) => {
    !mode;
  },
});

const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const [themeMode, toggleTheme, setThemeMode] = useThemeMode();
  // const theme = createTheme({
  //   palette: {
  //     mode: themeMode,
  //   },
  // });
  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
