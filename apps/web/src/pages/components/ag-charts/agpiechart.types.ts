export interface AgPieChartProps {
  height: number;
  data: { [key: string]: any }[];
  title: string;
  subtitle?: string;
  angleKey?: string;
  calloutLabelKey?: string;
  sectorLabelKey?: string;
  legendItemKey?: string;
}
