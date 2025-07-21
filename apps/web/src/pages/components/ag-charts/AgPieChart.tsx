import { AgCharts } from 'ag-charts-react';
import type { AgChartOptions, AgPieSeriesOptions } from 'ag-charts-community';
import { AgPieChartProps } from './agpiechart.types';
import { ThemeModeContext, useThemeMode } from '@app/lib/shared-components';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useContext } from 'react';
//this is a dynamic pie chart component, that renders a pie chart using the ag-charts-react library
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
  const { themeMode } = useContext(ThemeModeContext);
  const options: AgChartOptions = {
    // theme:"ag-material",
    theme: themeMode === 'light' ? 'ag-material' : 'ag-material-dark',
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
    animation: {
      enabled: true
    },
  };

  return <AgCharts options={options} />;
};

export default AgPieChart;
