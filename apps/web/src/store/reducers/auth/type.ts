import { ISidebarData } from '../../../components/SideBar/sidebar.types';

interface IAPIResponseSchema<T> {
  message: string;
  data: T;
  is_error: boolean;
  access_token?: string;
  last_updated?: string;
  status_code?: number;
}

interface IAuthSlice {
  isLoading: boolean;
  data: ILocalAuth | null;
  isError: boolean;
}

export interface ILocalAuth {
  access_token?: string;
  token_type: string;
  user_id: number;
  is_admin: boolean;
  permissions: string; // stringified = ISidebar  (older: INestedPermission)
  general_user_permissions: ISidebarData[];
}

export type { IAPIResponseSchema, IAuthSlice };
