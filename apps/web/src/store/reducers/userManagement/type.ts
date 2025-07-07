import { IUserDetailsData } from '../../../components/Table/types/type';
import { IUserPermissions } from '../../../pages/UserManagement/UserForm/types';

interface IUserList {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isadmin: boolean;
  isactive: boolean;
  loginattempt: number;
  permissions: null | string[];
  failedloginattempts?: number;
  lastlogintime?: null | any;
  islocked?: number | any;
  createdtime?: number;
  lastupdatedtime?: number;
  passwordresetcode?: null;
}

export interface IUserDetails {
  users_list: IUserDetailsData[];
  user_permissions: IUserPermissions[];
}

interface IUserManagementSliceInitialState {
  isLoading: boolean;
  userList: IUserDetailsData[];
  isError: boolean;
}

export type { IUserList, IUserManagementSliceInitialState };
