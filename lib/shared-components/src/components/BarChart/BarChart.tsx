import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Box, Typography } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useMemo } from 'react';
import { round } from '../../utils/generalFunction';
import { ITickerDetail } from '../types';
import { IBarChartProps } from './BarChart.types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin,
  ChartDataLabels
);

const BarChart = ({
  title,
  listData = [],
  isShowHistoricData: isShow,
  hAvgDiscount,
  hImpliesMultiple,
}: IBarChartProps) => {
  const labels = listData.map((it) => it.data_key);

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: listData.map((it) => it.data_value),
        backgroundColor: 'yellow',
        borderRadius: 10,
        maxBarThickness: 45,
        tension: 0.1,
        borderColor: 'gray',
        fill: true,
      },
    ],
  };

  const options = useMemo(
    () => ({
      responsive: true,
      scales: {
        x: {
          grid: {
            drawOnChartArea:false,
            drawBorder: true,
            color:"white"
          },
        },
        y: {
          grace: '15%',
          grid: {
            color: '#d3d3d3',
            borderWidth: 4,
          },
          border: {
            dash: [1, 4],
          },
          ticks: {
            beginAtZero: false,
            callback: function (value: string | number) {
              return value + 'x';
            },
          },
        },
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        datalabels: {
          font: {
            size: 12,
          },
          display: true,
          color: 'white',
          align: (context: {
            dataset: { data: { [x: string]: number } };
            dataIndex: string | number;
          }) => {
            return context.dataset.data[context.dataIndex] >= 0
              ? 'end'
              : 'start';
          },
          anchor: (context: {
            dataset: { data: { [x: string]: number } };
            dataIndex: string | number;
          }) => {
            return context.dataset.data[context.dataIndex] >= 0
              ? 'end'
              : 'start';
          },
          formatter: (value: string) => {
            return Number(value) !== 0
              ? `${parseFloat(value).toFixed(1)}x`
              : '';
          },
          rotation: -45,
          offset: (context: any) => {
            return context.dataset.data[context.dataIndex] >= 0 ? -5 : 0;
          },
          padding: 5,
        } as any,
        annotation: {
          annotations: {
            annotation1: {
              type: 'line',
              borderColor: '#405270',
              borderWidth: 1,
              label: {
                backgroundColor: 'red',
                content: '',
                display: false,
              },
              scaleID: 'y',
              value: 0,
            } as const,
            annotation2: {
              type: 'line',
              borderColor: 'red',
              borderWidth: 1,
              borderDash: [2, 3] as number[],
              label: {
                backgroundColor: 'red',
                content: '',
                display: false,
              },
              scaleID: 'y',
              value: hAvgDiscount
                ? parseFloat(round(hAvgDiscount?.data_value, 1).toFixed(1))
                : undefined,
            } as const,
          },
        },
        tooltip: {
          enabled: true,
          usePointStyle: true,
          titleAlign: 'center' as const,
          titleColor: 'black',
          titleSpacing: 3,
          TitleFont: {
            weight: 'bold',
          },
          backgroundColor: 'rgba(202, 189, 189, 0.9)',
          padding: 15,
          width: 30,
          callbacks: {
            title: function (context: { label?: string }[] | undefined) {
              if (context) {
                return context[0]?.label;
              }
            },
            labelColor: function () {
              return {
                borderColor: 'transparent',
                backgroundColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
              };
            },

            labelTextColor: function () {
              return 'black';
            },
            padding: 4,
            label: function (tooltipItem: TooltipItem<'bar'>) {
              return round(+tooltipItem.formattedValue, 1).toFixed(1) + 'x';
            },
          },
        },
      },
      backgroundColor: '#405270',
    }),
    [hAvgDiscount]
  );

  return (
    <Box width={'100%'}>
      <Box
        display={'flex'}
        mb={3}
        position={'relative'}
        bgcolor={'transparent'}
        justifyContent={'center'}
      >
        {isShow && (
          <Box position={'absolute'} top={0} left={0}>
            {historicValues.map((it) => {
              let value = '--- ';
              if (
                it.id === 'historicalaveragediscount' &&
                hAvgDiscount?.data_value
              ) {
                value = round(hAvgDiscount.data_value, 1).toFixed(1) + 'x';
              } else if (
                it.id === 'historicalimpliedmultiplentm' &&
                hImpliesMultiple?.data_value
              ) {
                value = round(hImpliesMultiple.data_value, 1).toFixed(1) + 'x';
              }
              return (
                <Typography key={it.id} variant="h6">
                  {it.label} = {value}
                </Typography>
              );
            })}
          </Box>
        )}
        <Typography
          variant="h5"
          lineHeight={'21.51px'}
          display={'flex'}
          textTransform={'capitalize'}
        >
          {title}
        </Typography>
      </Box>

      <Bar
        id="canva"
        options={options}
        data={data}
        width={'100%'}
        height={'20vh'}
        style={{ maxHeight: '400px' }}
      />
    </Box>
  );
};
export default BarChart;

let historicValues: { id: keyof ITickerDetail; label: string }[] = [
  {
    label: 'Historical Average Premium',
    id: 'historicalaveragediscount',
  },
  {
    label: 'Historical Implied Multiple NTM',
    id: 'historicalimpliedmultiplentm',
  },
];
