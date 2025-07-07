export interface IChartData {
  date: string;
  value: number;
}

export interface IDataSets {
  id: string;
  label: string;
  listData: { date: string; value: number }[];
  borderColor: string;
}

export interface LineChartProps {
  data_value: any;
  title: string;
  datasets: IDataSets[];
  isLoading: boolean;
  showPercValues: boolean;
}

export interface LineChartWProps {
  title: string;
  listData: { date: string; value: number }[];
  isLoading: boolean;
  showPercValues: boolean;
}
