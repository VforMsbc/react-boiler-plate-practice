import React from 'react';
import AgPieChart from '../components/ag-charts/AgPieChart';
import { Box } from '@mui/material';
const PRODUCTS_PIE_DATA = [
  {
    name: 'TV',
    sales: 40000,
  },
  {
    name: 'Refrigerator',
    sales: 30000,
  },
  {
    name: 'Washing Machine',
    sales: 20000,
  },
  {
    name: 'Air Conditioner',
    sales: 10000,
  },
];

const Products = () => {
  return (
    <Box >
      <AgPieChart
        height={500}
        data={PRODUCTS_PIE_DATA}
        title="Products Pie Chart"
        angleKey={'sales'}
        calloutLabelKey={'name'}
        sectorLabelKey={'sales'}
        legendItemKey={'name'}
      />
      {/* <h1>sdfsdrsfrf</h1> */}
    </Box>
  );
};

export default Products;
