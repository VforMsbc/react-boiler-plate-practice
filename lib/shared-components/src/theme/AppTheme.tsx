import { ToastContainer } from 'react-toastify';
import ThemeModeProvider, {
  ThemeModeContext,
} from './providers/ThemeModeProvider';
import MTheme from './wrapper/MTheme';
import { useContext } from 'react';
import { useThemeMode } from './hooks/useThemeMode';

interface AppThemeProps {
  children?: React.ReactNode;
}

const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeModeProvider>
      <ThemeContainer>{children}</ThemeContainer>
    </ThemeModeProvider>
  );
};

const DEFAULT_THEME_MODE = 'dark'; // bt default theme

const mapToToastTheme = (
  mode: string | undefined
): 'light' | 'dark' | 'colored' => {
  if (mode === 'light') return 'light';
  if (mode === 'dark') return 'dark';
  return 'colored';
};

const ThemeContainer = ({ children }: { children?: React.ReactNode }) => {
  // const [ themeMode ] = useThemeMode();
  const {themeMode}=useContext(ThemeModeContext);
  return (
    <>
      <ToastContainer theme={mapToToastTheme(themeMode)} />
      <MTheme themeMode={themeMode ?? DEFAULT_THEME_MODE}>{children}</MTheme>
    </>
  );
};

export default AppTheme;
