import {
  BarChart,
  ITickerDetailItem,
  LineChartW,
} from '@app/lib/shared-components';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BARCHART_DATA } from '../../data/barchart.data';
import { LINE_CHART_DATA } from '../../data/linechart.data';
import AgPieChart from '../components/ag-charts/AgPieChart';

const Home = () => {
  const [barChartList] = useState<ITickerDetailItem[]>(BARCHART_DATA);

  const [lineChartList] =
    useState<{ date: string; value: number }[]>(LINE_CHART_DATA);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',  
        flexDirection: 'column',
        bgcolor: '',
        // minHeight: '92vh',
      }}
    >
      <Box sx={{ width: '800px', display: 'flex' }}>
        {/* <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>Home</Typography> */}

        <BarChart
          title="Sales Bar Chart"
          listData={barChartList}
          isShowHistoricData={false}
          hAvgDiscount={undefined}
          hImpliesMultiple={undefined}
        />
      </Box>
      <Box sx={{ width: '800px' }}>
        <LineChartW
          isLoading={false}
          listData={lineChartList}
          showPercValues={false}
          title="Profit Line Chart"
        />
      </Box>
    </Box>
  );
};

export default Home;
