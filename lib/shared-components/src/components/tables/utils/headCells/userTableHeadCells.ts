import { IHeadCell, IUserDetails } from '../../../types/type';

const headCells: IHeadCell<IUserDetails>[] = [
  {
    id: 'firstname',
    numeric: true,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastname',
    numeric: true,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email ID',
  },
  {
    id: 'isadmin',
    numeric: true,
    disablePadding: false,
    label: 'Admin',
  },
  {
    id: 'isactive',
    numeric: true,
    disablePadding: false,
    label: 'Active',
  },
  {
    id: 'loginattempt',
    numeric: true,
    disablePadding: false,
    label: 'Locked',
  },
  {
    id: '',
    numeric: false,
    disablePadding: false,
    label: 'Edit',
  },
];

export default headCells;
