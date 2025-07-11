import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { TopBar } from '../../../components/TopBar';
import { getLocalAuth } from '../../../util/getLocalAuth';
import { SideBar } from '../../../components/SideBar';
import { ISidebarData } from 'apps/web/src/components/SideBar/sidebar.types';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AutoCompleteComponent from '../../../pages/components/auto-complete/AutoCompleteComponent';
import DynamicFormComponent from '../../../pages/components/form/DynamicFormComponent';
import { FieldsConfig } from 'apps/web/src/pages/components/form/Fields';
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
  ];

  const formFieldsData:FieldsConfig[] = [
    {
      id:"name",
      type: 'text' as const,
      label: 'Name',
      placeholder: 'Enter your name',
      name: 'name',
      required: true,
    },
    {
      id:"email",
      type: 'email' as const,
      label: 'Email',
      placeholder: 'Enter your email',
      name: 'email',
      required: true,
    },
    {
      id:"password",
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      name: 'password',
      required: true,
    },
    {
      id:"date",
      type: 'date' as const,
      label: 'Date of Birth',
      name: 'dob',
      required: false,
    },
    {
      id:"phoneno",
      type: 'number' as const,
      label: 'PhoneNo.',
      name: 'phoneNo',
      placeholder: 'Enter your phone number',
      required: false,
    },
    {
      id:'gender',
      type: 'radio' as const,
      label: 'Gender',
      name: 'gender',
      required: false,
      
      options: [
      { label: 'Male', value: 'male', checked: false },
      { label: 'Female', value: 'female', checked: false },
      { label: 'Other', value: 'other', checked: false },
    ],
    },

    {
      id:'rememberMe',
      type: 'checkbox' as const,
      label: 'Remember Me',
      name: 'rememberMe',
      required: false,
    },
    {
      id:'levels',
      type: 'single-selector' as const,
      label: 'Levels',
      name: 'levels',
      required: false,
      
      options: [
      { label: 'Level 1', value: 'level1', checked: false },
      { label: 'Level 2', value: 'level2', checked: false },
      { label: 'Level 3', value: 'level3', checked: false },
    ],
    },
    {
      id:'skills',
      type: 'multi-selector' as const,
      label: 'Skills',
      name: 'skills',
      required: false,
      
      options: [
      { label: 'Java', value: 'java', checked: false },
      { label: 'React', value: 'react', checked: false },
      { label: 'Sql', value: 'sql', checked: false },
    ],
    },
  ] satisfies FieldsConfig[];
  return (
    <>
      <SideBar children={<AutoCompleteComponent />} />
      <Box
        className={'content'}
        bgcolor={'background.paper'}
        display={'flex'}
        flexDirection={'column'}
        width={'100%'}
      >
        <TopBar title={'Dashboard'} />
        {/* <Outlet /> */}
        <DynamicFormComponent
          formTitle={'User Form'}
          inputFields={formFieldsData}
          onsubmit={(e) => console.log(e)}
        />
      </Box>
    </>
  );
};
