import {
  Avatar,
  Box,
  createTheme,
  IconButton,
  Typography,
} from '@mui/material';
import * as style from './style';
import { useContext, useEffect, useState } from 'react';
import { MButton } from '@jp/material-core-master';
import { MSwitch } from '@jp/material-core-master';
import { ThemeModeContext, useThemeMode } from '@app/lib/shared-components';
import { SimpleDialog } from '../Dialog';
import DynamicFormComponent from '../../pages/components/form/DynamicFormComponent';

const TopBar = ({ title }: { title: string }) => {
  const [isLoggedIn] = useState(false);
  const {themeMode, toggleTheme } = useContext(ThemeModeContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  // const theme = createTheme({
  //   palette: {
  //     mode: themeMode === 'dark' ? 'dark' : 'light',
  //   },
  // });

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  
  const handleAuthSubmit=()=>{

  }
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
          color="primary"
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
              // href="/auth/login"
              size="medium"
              variant="contained"
              sx={{ marginBottom: '9px' }}
              onClick={handleDialogOpen}
            />
          </>
        )}

        <Box>
          <SimpleDialog
            open={openDialog}
            title={'Login'}
            handleClose={handleDialogClose}
          >
            <>
              <DynamicFormComponent
              formTitle={''}
              onsubmit={handleAuthSubmit}
                inputFields={[
                  {
                    id: 'email',
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    required: true,
                  },
                  {
                    id: 'password',
                    name: 'password',
                    label: 'Password',
                    type: 'password',
                    required: true,
                  },
                ]}
              />

              <Box>
                <Typography
                  sx={{ display: 'flex', justifyContent: 'center' }}
                  variant="h6"
                  color="text.secondary"
                >
                  Don't have an account? <a href="/auth/register">Sign up</a>
                </Typography>
              </Box>
            </>
          </SimpleDialog>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
