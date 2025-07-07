import { TableColumns } from '@app/lib/shared-components';
import { SvgIconProps } from '@mui/material';
import { ComponentType } from 'react';
import { IUserDetailsData } from '../../components/Table/types/type';
import DoneIcon from '@mui/icons-material/Done';
import UserIcon from '../../assets/images/User.png';

export interface IHeaderCell {
  id: string;
  label: string;
  isShowIcon?: boolean;
  isEditIcon?: boolean;
  order: number; // Add the 'order' property
}

export const rows: IUserDetailsData[] = [
  {
    id: 1,
    firstname: 'demo',
    lastname: 'demo1',
    email: 'demo@gmail.com',
    password: 'demo@123',
    isadmin: true,
    isactive: true,
    loginattempt: 1,
    permissions: '',
    islocked: true,
  },
];

const headerCell: TableColumns<IUserDetailsData>[] = [
  {
    id: 'firstname',
    label: 'First Name',
    order: 1, // Add the 'order' property
  },
  {
    id: 'lastname',
    label: 'Last Name',
    order: 2, // Add the 'order' property
  },
  {
    id: 'email',
    label: 'Email Id',
    order: 3, // Add the 'order' property
  },
  {
    id: 'isadmin',
    label: 'Admin',
    cellRenderer: 'isAdminRender',
    order: 4, // Add the 'order' property
  },
  {
    id: 'isactive',
    label: 'Active',
    cellRenderer: 'isActiveRender',
    order: 5, // Add the 'order' property
  },
  {
    id: 'islocked',
    label: 'Locked',
    cellRenderer: 'isLockedRender',
    order: 6, // Add the 'order' property
  },
  {
    id: 'isEdit',
    label: 'Edit',
    cellRenderer: 'isEditRender',
    order: 7, // Add the 'order' property
  },
];

export { headerCell };
