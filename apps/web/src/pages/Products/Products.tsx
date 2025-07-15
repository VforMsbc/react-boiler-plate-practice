import React from 'react';
import AgPieChart from '../components/ag-charts/AgPieChart';
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
    <div>
      <AgPieChart
        height={500}
        data={PRODUCTS_PIE_DATA}
        title="Products Pie Chart"
        angleKey={'sales'}
        calloutLabelKey={'name'}
        sectorLabelKey={'sales'}
        legendItemKey={'name'}
      />
    </div>
  );
};

export default Products;
