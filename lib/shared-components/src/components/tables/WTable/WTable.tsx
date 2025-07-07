import { SxProps, TableContainer, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EnhancedTableHead from '../utils/AppTableHead/AppTableHead';
import { IHeadCell, ITickerDetail } from '../../types/type';
import { getValueAndParenthesis } from '../utils/utils';
import { CombinedTickerDetails } from '../utils/headCells/writeupDetailTableHeadCells';
import { IWTableProps } from './WTable.types';

const tableContainerStyle: SxProps = {
  width: '100%',
  maxWidth: 'fit-content',
};

const WTable: React.FC<IWTableProps> = ({
  data,
  headCells,
  ticker,
  hasHeaderTop,
  headerTopColSpan,
  headerTopTitle,
}) => {
  return (
    <TableContainer sx={tableContainerStyle}>
      <Table>
        <EnhancedTableHead
          headCells={headCells}
          hasHeaderTop={hasHeaderTop}
          headerTopColSpan={headerTopColSpan}
          headerTopTitle={headerTopTitle}
        />
        <TableBody>
          <TableRow>
            {data &&
              headCells.map(
                (it: IHeadCell<CombinedTickerDetails>, index: number) => {
                  const { value, showInParenthesis } =
                    getValueAndParenthesis<ITickerDetail>(it, data, ticker);
                  return (
                    <TableCell
                      key={`${value}-${index}`}
                      variant="body"
                      color="info"
                      sx={{ minWidth: '100px' }}
                    >
                      <Typography variant="h6" textAlign={'center'}>
                        {value ?? '---'}
                      </Typography>
                    </TableCell>
                  );
                }
              )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { WTable };
