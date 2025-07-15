import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions, AgPieSeriesOptions } from 'ag-charts-community';
import { AgPieChartProps } from './agpiechart.types';

const AgPieChart = ({
  height,
  data,
  title,
  subtitle = '',
  angleKey = '',
  calloutLabelKey = '',
  sectorLabelKey = '',
  legendItemKey = '',
}: AgPieChartProps) => {
  const pieSeries: AgPieSeriesOptions = {
    type: 'pie',
    angleKey,
    calloutLabelKey,
    sectorLabelKey,
    legendItemKey,
    sectorLabel: {
      color: 'white',
      fontSize: 16,
      formatter: ({ value }: { value: number }) =>
        `$${(value / 1000).toFixed(0)}K`,
    },
  };

  const options: AgChartOptions = {
    data,
    height,
    title: {
      text: title,
    },
    subtitle: {
      text: subtitle,
      fontSize: 14,
    },
    series: [pieSeries],
  };

  return <AgCharts options={options} />;
};

export default AgPieChart;
