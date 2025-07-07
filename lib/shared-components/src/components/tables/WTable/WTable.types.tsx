import { IHeadCell, ITickerDetail } from '../../types';
import { CombinedTickerDetails } from '../utils/headCells/writeupDetailTableHeadCells';

export interface IWTableProps {
  isLoading: boolean;
  data: ITickerDetail | null;
  ticker?: string;
  headCells: IHeadCell<CombinedTickerDetails>[];
  hasHeaderTop?: boolean;
  headerTopTitle?: string;
  headerTopColSpan?: number;
}
