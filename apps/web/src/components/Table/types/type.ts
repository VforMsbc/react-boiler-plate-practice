export interface IHeadCell<T extends Record<string, any> = {}> {
  id: keyof T | '';
  disablePadding?: boolean;
  label: string;
  numeric?: boolean;
  name?: string;
  isSortable?: boolean;
  isOptional?: boolean;
  suffix?: string;
  showRedForNegativeValue?: boolean;
}

export interface IUserDetailsData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isadmin: boolean;
  isactive: boolean;
  loginattempt: number;
  permissions: string;
  islocked: boolean;
  isEdit?: boolean;
  checked?:boolean;
}
