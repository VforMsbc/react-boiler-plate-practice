import { IUserDetails } from "../../types/type";

interface Props {
  list: IUserDetails[];
  isLoading?: boolean;
  handleOpenDialog: (row: IUserDetails) => void;
}

interface IParms {
  data: IUserDetails;
}

interface IGridHeadCell {
  headerName: string;
  field: string;
  cellRenderer?: string;
  flex?: number;
}

export type { Props, IParms, IGridHeadCell };
