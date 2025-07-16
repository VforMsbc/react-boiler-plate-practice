import { useMemo, useRef } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
  Tooltip,
  CategoryScale,
  ScriptableContext,
  TooltipItem,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import annotationPlugin from 'chartjs-plugin-annotation';
import { round } from '../../utils/generalFunction';
import { IChartData, LineChartWProps } from './LineChart.types';

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Legend,
  Tooltip,
  annotationPlugin
);

const LineChart: React.FC<LineChartWProps> = ({
  isLoading,
  listData,
  title,
  showPercValues,
}) => {
  const chartRef = useRef<any>();
  const data = useMemo(() => {
    let uniqueList = new Map<string, IChartData>();
    listData.forEach((it) => {
      if (!uniqueList.has(it.date)) {
        uniqueList.set(it.date, {
          ...it,
          value: +round(it.value, 2).toFixed(1),
        });
      }
    });
    const list = Array.from(uniqueList, ([_, value]) => value);

    return {
      datasets: [
        {
          label: 'value',
          // tension: 0.3,
          spanGaps: true,
          data: list ?? [],
          // fill: true,
          borderColor: '#467FD8',
          pointBorderColor: '#AAA',
          pointBackgroundColor: '#f2f3f2',
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 25, 0, 300);
            gradient.addColorStop(0, 'rgba(70, 127, 216, 0.30)');
            gradient.addColorStop(1, 'rgba(35, 82, 155, 0.00)');
            return gradient;
          },
        },
      ],
    };
  }, [listData]);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      radius: 0,
      scales: {
        x: {
          grid: {
            display: false,
          },
          label: 'date',
        },
        y: {
          ticks: {
            beginAtZero: false,
            callback: function (value: string | number) {
              if (typeof value === 'number') {
                value = value.toFixed(1);
              }
              return showPercValues ? value + '%' : value;
            },
          },
          grid: {
            color: 'yellow',
            borderWidth: 2,
            border: {
              dash: [1, 4],
            },
          },
          label: 'value',
        },
      },
      parsing: {
        xAxisKey: 'date',
        yAxisKey: 'value',
      },
      interaction: {
        mode: 'nearest' as const,
        axis: 'x' as const,
        intersect: false,
      },
      plugins: {
        tooltip: {
          enabled: true,
          usePointStyle: true,
          titleAlign: 'center' as const,
          titleColor: 'black',
          titleSpacing: 3,
          TitleFont: {
            weight: 'bold',
          },
          backgroundColor: 'rgba(219, 233, 97, 0.9)',
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
        datalabels: {
          display: false,
        },
        title: {
          display: false,
          text: 'Last year price graph',
          color: 'red',
        },
        legend: {
          display: false,
          usePointStyle: false,
        },
      },
    }),
    []
  );

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={'column'}
        gap={4}
        width="100%"
        height={'30vh'}
        maxHeight={'400px'}
        minHeight={'300px'}
        borderRadius={'8px'}
        p={'15px'}
      >
        <Typography
          variant="h5"
          lineHeight={'21.51px'}
          display={'flex'}
          textAlign={'start'}
          alignSelf={'center'}
          textTransform={'capitalize'}
        >
          {title}
        </Typography>
        <Line ref={chartRef} options={options as any} data={data} />
      </Box>
    </>
  );
};

export default LineChart;
