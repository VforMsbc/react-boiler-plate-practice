import { Box, Typography } from '@mui/material';
import { useLogin } from './Login.hooks';
import * as style from './style';
import { formInputFilleds } from './utils';
import { AppTextField, MButton } from '@app/lib/shared-components';
import {  MRadioGroup, MSelect, MSlider, MSwitch } from '@jp/material-core-master';
import React, { useState } from 'react';


const Login = () => {
  const {
    variable: { isLoading, loginDetails, loginDetailsErr },
    methods: { handleChangeLoginDetails, handleSubmit },
  } = useLogin();

  const [role, setRole] = React.useState<string>('');
  const [remember, setRemember] = useState<boolean>(false)
  const [level, setLevel] = useState<string>('');

  return (
    <Box
      border={1}
      margin={4}
      padding={2}
      borderRadius={2}
      width={500}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      justifyItems={'center'}
    >
      <>
        <Typography variant={'h1'} color={'grey.main'}>
          Sign in
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={style.formStyle}>
            {formInputFilleds.map((input) => (
              <AppTextField
                key={input.id}
                variant="standard"
                value={loginDetails[input.value] ?? ''}
                type={input.type}
                label={input.lable}
                placeholder={input.placeholder}
                name={input.value}
                onChange={handleChangeLoginDetails}
                disabled={input.disable}
                fullWidth
                errmsg={loginDetailsErr[input.errValue] ?? ''}
              />
            ))}

            <MRadioGroup
              label="Roles"
              name='role'
              options={[
                { id: '1', label: 'Project Co-Ordinator', value: 'project_coordinator' },
                { id: '2', label: 'Project Manager', value: 'project_manager' },
                { id: '3', label: 'Developer', value: 'developer' },
              ]}
              row={false}
              value={role}
              color='secondary'
              onChange={(option) => setRole(option.value)}
            />

            <MSwitch
              label='Remember Me'
              checked={remember!}
              value={remember}
              onChange={(event) => setRemember(event.target.checked)}
              size='small'
            />
            <MSelect
              size={'small'}
              autoWidth={false}
              variant='outlined'
              onChange={(option) => setLevel(option.value)}
              label='Select Level'
              options={[
                { label: "1", value: "Level 1" },
                { label: "2", value: "Level 2" },
                { label: "3", value: "Level 3" },
              ]}
              sx={{ minWidth: 130 }}
            />

            <MButton
              type="submit"
              variant="contained"
              color="inherit"
              label={isLoading ? 'Loading...' : 'Sign In'}
              disabled={isLoading}
            />
          </Box>
        </form>
      </>
    </Box>
  );
};

export default Login;
