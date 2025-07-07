import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUserList } from '../../store/reducers/userManagement/service';

const useUserProfile = () => {
  const dispatch = useAppDispatch();

  const { userList } = useAppSelector((state) => state.usermanagement);

  useEffect(() => {
    // // const promise = dispatch(getUserList());
    // promise.unwrap().catch((err: any) => console.log(err));
    // return () => promise.abort();
  }, []);

  return { userList };
};

export default useUserProfile;
