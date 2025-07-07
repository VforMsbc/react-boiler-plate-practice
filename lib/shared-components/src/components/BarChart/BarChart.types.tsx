import { ITickerDetailItem } from '../types';

export interface IBarChartProps {
  title: string;
  listData: ITickerDetailItem[];
  isShowHistoricData: boolean;
  hAvgDiscount?: ITickerDetailItem | null;
  hImpliesMultiple?: ITickerDetailItem | null;
}
