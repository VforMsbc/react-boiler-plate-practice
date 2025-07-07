import {
  Avatar,
  Box,
  createTheme,
  IconButton,
  Typography,
} from '@mui/material';
import * as style from './style';
import { useContext, useState } from 'react';
import { MButton } from '@jp/material-core-master';
import { MSwitch } from '@jp/material-core-master';
import { ThemeModeContext } from '@app/lib/shared-components';
const TopBar = ({ title }: { title: string }) => {
  // const [title] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { themeMode, toggleTheme } = useContext(ThemeModeContext);
  const theme = createTheme({
    palette: {
      mode: themeMode === 'dark' ? 'dark' : 'light',
    },
  });

  return (
    <Box sx={style.topBar}>
      <Typography
        variant={'h4'}
        color={'grey.main'}
        sx={{ ...style.topBarTypo }}
        id={'topbarTitle'}
      >
        {title}
      </Typography>

      <Box sx={style.topBarContainer}>
        <MSwitch
          checked={themeMode === 'dark'}
          onChange={toggleTheme}
          color='primary'
        />
        {isLoggedIn ? (
          <IconButton>
            <Avatar id="profile_icon" alt="Remy Sharp" sx={style.topBarAvtar} />
          </IconButton>
        ) : (
          <>
            <MButton
              label="Login / Sign Up"
              color="primary"
              disabled={false}
              disableElevation={false}
              disableFocusRipple={false}
              disableRipple={false}
              fullWidth={false}
              href="/auth/login"
              size="medium"
              variant="contained"
              sx={{ marginBottom: '9px' }}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default TopBar;
