export enum Identifier {
  Container = 'container',
  Button = 'button',
  WTable = 'WTable',
  BarChart = 'barChart',
  LineChartW = 'lineChartW',
  AppTextField = 'AppTextField',
  Typography = 'Typography',
}

export interface IBaseBlock<T = null> {
  identifier: Identifier;
  metadata: T;
  items: IBaseBlock<any>[];
}
