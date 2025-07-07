import { BarChart, ITickerDetailItem, LineChartW } from '@app/lib/shared-components';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BARCHART_DATA } from '../../data/barchart.data';
import { LINE_CHART_DATA } from '../../data/linechart.data';

const Home = () => {
  const [barChartList] = useState<ITickerDetailItem[]>(BARCHART_DATA);

  const [lineChartList] = useState<{ date: string; value: number }[]>(LINE_CHART_DATA);
  return (
    <Box sx={{ display:'flex'}}>
      {/* <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>Home</Typography> */}

      <BarChart
        title="Bar Chart"
        listData={barChartList}
        isShowHistoricData={false}
        hAvgDiscount={undefined}
        hImpliesMultiple={undefined}
      />

      <LineChartW
      isLoading={false}
        listData={lineChartList}
        showPercValues={false}
       title="Line Chart"
      />

    </Box>
  );
};

export default Home;
