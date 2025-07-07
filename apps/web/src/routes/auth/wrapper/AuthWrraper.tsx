import { Fragment, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ILocalAuth } from '../../../store/reducers/auth/type';
import { getLocalAuth } from '../../../util/getLocalAuth';

const AuthWrraper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken: ILocalAuth = getLocalAuth();
    if (userToken && userToken.access_token) {
      setIsLoggedIn(true);
      return navigate('/', { replace: true });
    } else setIsLoggedIn(false);
  };

  useEffect(() => {
    // checkUserToken();
  }, [isLoggedIn]);

  return <Fragment>{!isLoggedIn && <Outlet />}</Fragment>;
};

export default AuthWrraper;
