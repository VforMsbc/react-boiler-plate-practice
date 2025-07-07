import { Box, Typography } from '@mui/material';
import { useLogin } from './Login.hooks';
import * as style from './style';
import { formInputFilleds } from './utils';
import { AppTextField, MButton } from '@app/lib/shared-components';

const Login = () => {
  const {
    variable: { isLoading, loginDetails, loginDetailsErr },
    methods: { handleChangeLoginDetails, handleSubmit },
  } = useLogin();

  return (
    <Box
      border={1}
      margin={4}
      padding={2}
      borderRadius={2}
      maxWidth={300}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
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

          <MButton
            type="submit"
            variant="outlined"
            color="primary"
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
