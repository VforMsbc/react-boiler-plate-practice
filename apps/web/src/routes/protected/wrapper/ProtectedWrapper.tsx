import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { TopBar } from '../../../components/TopBar';
import { getLocalAuth } from '../../../util/getLocalAuth';
import { SideBar } from '../../../components/SideBar';
import { ISidebarData } from 'apps/web/src/components/SideBar/sidebar.types';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
const ProtectedWrapper = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // make default false

  const checkUserToken = () => {
    const userToken = getLocalAuth();
    if (!userToken || !userToken.access_token) {
      setIsLoggedIn(false);
      return navigate('/auth/login', { replace: true });
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // checkUserToken();
  }, [isLoggedIn]);

  return (
    <Box
      display={'flex'}
      alignItems={'flex-start'}
      justifyContent={'space-between'}
    >
      {isLoggedIn && <Content />}
    </Box>
  );
};

export default ProtectedWrapper;

const Content = () => {
  const location = useLocation();

  const sidebarItems: ISidebarData[] = [
    {
      id: '1',
      label: 'Home',
      link: '/home',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <HomeIcon />,
      children: [],
    },
    {
      id: '2',
      label: 'Products',
      link: '/products',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <CategoryIcon />,
      children: [],
    },
    {
      id: '3',
      label: 'Orders',
      link: '/orders',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <LocalShippingIcon />,
      children: [],
    },
    {
      id: '4',
      label: 'Users',
      link: '/users',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <PersonIcon />,
      children: [],
    },
    {
      id: '5',
      label: 'Posts',
      link: '/posts',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <AddBoxIcon />,
      children: [],
    },
    {
      id: '6',
      label: 'Form',
      link: '/forms',
      isParent: false,
      isDisabled: false,
      checked: false,
      indeterminate: false,
      icon: <TextSnippetIcon />,
      children: [],
    },
  ];

 
  return (
    <>
      <SideBar sidebarItems={sidebarItems} />
      <Box
        className={'content'}
        bgcolor={'background.paper'}
        display={'flex'}
        flexDirection={'column'}
        width={'100%'}
      >
        <TopBar title={'Dashboard'} />
        <Outlet />
        
      </Box>
    </>
  );
};
