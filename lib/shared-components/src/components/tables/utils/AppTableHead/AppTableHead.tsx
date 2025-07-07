import { TableCell, TableHead, TableRow } from '@mui/material';
import { IHeadCell } from '../../../types/type';

interface Props<T extends Record<string, any>> {
  headCells: IHeadCell<T>[];
  hasHeaderTop?: boolean;
  headerTopTitle?: string;
  headerTopColSpan?: number;
}

const EnhancedTableHead = <T extends Record<string, any>>({
  headCells,
  hasHeaderTop = false,
  headerTopTitle,
  headerTopColSpan,
}: Props<T>) => {
  const tColSpan = headerTopColSpan ? headCells.length - headerTopColSpan : 0;
  return (
    <TableHead>
      {hasHeaderTop && (
        <TableRow>
          {tColSpan > 0 && <TableCell variant="head" color="transparent" />}
          <TableCell
            variant="head"
            color="secondary"
            colSpan={headerTopColSpan}
            sx={{ minWidth: '100px' }}
          >
            {headerTopTitle}
          </TableCell>
        </TableRow>
      )}
      <TableRow>
        {headCells?.map((headCell: IHeadCell<T>) => (
          <TableCell variant="head" color="primary" key={headCell.label}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default EnhancedTableHead;
