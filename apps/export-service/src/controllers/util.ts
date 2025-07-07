import {
  IBarChartProps,
  IBaseBlock,
  Identifier,
} from '@app/lib/shared-components';
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { LineChartWProps } from 'lib/shared-components/src/components/LineChart/LineChart.types';
import 'chartjs-adapter-moment';

Chart.register(annotationPlugin);

const chartDataConfig = (
  schema: IBaseBlock<IBarChartProps | LineChartWProps>
) => {
  const { listData } = schema.metadata;

  const chartData = (): { chartData: number; chartLabel: string } => {
    let chartData;
    let chartLabel;
    if (schema.identifier === Identifier.LineChartW) {
      chartData = listData.map((item) => item.value);
      chartLabel = listData.map((item) => item.date);
    } else if (schema.identifier === Identifier.BarChart) {
      chartData = listData.map((item) => item.data_value);
      chartLabel = listData.map((item) => item.data_key);
    }

    return { chartData, chartLabel };
  };
  const data = chartData();

  return {
    labels: data.chartLabel,
    datasets: [
      {
        label: '',
        data: data.chartData,
        backgroundColor: '#467FD8',
        borderRadius: 0,
        maxBarThickness: 15,
        minBarThickness: 10,
        lineTension: 0.1,
        borderColor:
          schema.identifier === Identifier.BarChart ? 'blue' : '#467FD8',
        fill: schema.identifier === Identifier.BarChart ? true : false,
        pointRadius: 0,
        borderWidth: schema.identifier === Identifier.LineChartW ? 2 : 0,
      },
    ],
  };
};

const chartOPtsConfig = (
  schema: IBaseBlock<IBarChartProps | LineChartWProps>
) => {
  const { title } = schema.metadata;

  const chartTitle =
    schema.identifier === Identifier.LineChartW ||
    schema.identifier === Identifier.BarChart
      ? title
      : '';

  const showticksinBarChart = () => {
    return {
      beginAtZero: true,
      callback: function (value) {
        return value + 'x';
      },
    };
  };

  const showTicksinLineChart = () => {
    return {
      beginAtZero: false,
      callback: function (value: string | number) {
        if (typeof value === 'number') {
          value = value.toFixed(1);
        }
        return value + '%';
      },
    };
  };

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: '#d3d3d3',
            borderDash: [1, 4],
          },
          ticks:
            schema.identifier === Identifier.BarChart
              ? showticksinBarChart()
              : showTicksinLineChart(),
          min: 0,
          max: 100,
        },
      ],
    },

    plugins: {
      annotation: {
        annotations: [
          {
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y',
            value: 50,
            borderColor: 'red',
            borderWidth: 2,
            borderDash: [5, 5],
          },
        ],
      },
    },
    legend: { display: false },
    title: {
      display: true,
      text: chartTitle,
      font: { size: 16, weight: 'bolder' },
      color: 'black',
    },
  };
};

export { chartDataConfig, chartOPtsConfig };
