import { IUserBody } from 'apps/web/src/services/userManagementServices';

interface FormData {
  firstName: string;
  lastName: string;
  emailId: string;
  pass: string;
  cPass: string;
  active: boolean;
  admin: boolean;
  locked: boolean;
  userPermissions: boolean;
  [key: string]: string | boolean;
}

interface IUserFormCheckboxFields {
  id: keyof IUserBody;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

interface IUserFormInputFields {
  key: keyof IUserBody;
  label: string;
  placeholder: string;
  type?: 'number' | 'password' | 'text' | 'tel' | 'url';
}

interface IUserPermissions {
  id: string;
  label: string;
  isParent?: boolean;
  checked?: boolean;
  disabled?: boolean;
  children?: IUserPermissions[];
}

// interface ChildCheck {
//   id: string;
//   label: string;
//   checked: boolean;
//   disabled?: boolean;
// }

export type {
  IUserFormCheckboxFields,
  FormData,
  IUserFormInputFields,
  IUserPermissions,
};
