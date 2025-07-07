import useUserProfile from './UserProfile.hooks';
import { Box } from '@mui/material';
import UserForm from '../UserManagement/UserForm/UserForm';
import { getLocalAuth } from '../../util/getLocalAuth';

const UserProfile = () => {
  const { userList } = useUserProfile();

  let data = getLocalAuth()?.is_admin
    ? userList.filter((it) => it.id === getLocalAuth()?.user_id)
    : userList;

  return (
    <Box p={'20px'}>
      <UserForm
        isEdit={true}
        rowData={data?.length > 0 ? data[0] : undefined}
      />

    </Box>
  );
};

export default UserProfile;
