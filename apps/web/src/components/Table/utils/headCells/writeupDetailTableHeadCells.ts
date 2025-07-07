import {
  IHeadCell,
  ITickerDetail,
  ITickerDetailItem,
} from '@app/lib/shared-components';

export interface CombinedTickerDetails
  extends ITickerDetail,
    ITickerDetailItem {}

const valueGrowthHeadCell: IHeadCell<CombinedTickerDetails>[] = [
  {
    id: 'ticker',
    label: 'Ticker',
  },
  {
    id: 'value',
    label: 'Value',
    showRedForNegativeValue: true,
  },
  {
    id: 'growth',
    label: 'Growth',
    showRedForNegativeValue: true,
  },
  {
    id: 'momentum',
    label: 'Momentum',
    showRedForNegativeValue: true,
  },
  {
    id: 'crowding',
    label: 'Crowding',
    showRedForNegativeValue: true,
  },
  {
    id: '3mmom',
    label: 'M3 Momentum',
  },
];

const spBetaHeadCells: IHeadCell<CombinedTickerDetails>[] = [
  {
    id: 'spxbeta',
    label: 'S&P Beta',
  },
  {
    id: 'factorbeta',
    label: 'Barra Beta',
  },
  {
    id: 'shortinterest',
    label: 'SI % Float',
    suffix: '%',
  },
];

const alpha5dHeadCells: IHeadCell<CombinedTickerDetails>[] = [
  {
    id: 'ticker',
    label: 'Ticker',
  },
  {
    id: '5dalpha',
    label: 'Alpha (5D)',
    suffix: '%',
  },
  {
    id: '5dtotal',
    label: 'Total',
    suffix: '%',
  },
  {
    id: '5dfactor',
    label: 'Factor',
    suffix: '%',
  },
];

const alpha30dHeadCells: IHeadCell<CombinedTickerDetails>[] = [
  {
    id: '30dalpha',
    label: 'Alpha (1M)',
    suffix: '%',
  },
  {
    id: '30dtotal',
    label: 'Total',
    suffix: '%',
  },
  {
    id: '30dfactor',
    label: 'Factor',
    suffix: '%',
  },
];

export {
  valueGrowthHeadCell,
  spBetaHeadCells,
  alpha5dHeadCells,
  alpha30dHeadCells,
};
