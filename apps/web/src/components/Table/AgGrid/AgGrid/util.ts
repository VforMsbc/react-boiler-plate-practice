import { IGridHeadCell } from "./type";

const gridheadCells: IGridHeadCell[] = [
  {
    headerName: "First Name",
    field: "firstname",
    flex: 1,
  },
  {
    headerName: "Last Name",
    field: "lastname",
    flex: 1,
  },
  {
    headerName: "Email Id",
    field: "email",
    flex: 1,
  },
  {
    headerName: "Admin",
    field: "isadmin",
    cellRenderer: "isAdminCellRenderer",
    flex: 1,
  },
  {
    headerName: "Active",
    field: "isactive",
    cellRenderer: "isActiveCellRenderer",
    flex: 1,
  },
  {
    headerName: "Locked",
    field: "loginattempt",
    cellRenderer: "isLockedCellRenderer",
    flex: 1,
  },
  {
    headerName: "",
    field: "isEdit",
    cellRenderer: "isEditCellRenderer",
    flex: 1,
  },
];

export default gridheadCells;
