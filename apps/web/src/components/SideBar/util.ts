import WriteUp from '@mui/icons-material/EnergySavingsLeaf';
import GamepadIcon from '@mui/icons-material/Gamepad';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import Dashboard from '@mui/icons-material/Home';
import Logout from '@mui/icons-material/Logout';
import { SvgIconProps } from '@mui/material';
import { ComponentType } from 'react';

import {
  AlphaIcon,
  CustomRiskIcon,
  PerformanceIcon,
  ReturnsIcon,
  SectorRiskIcon,
  TotalRisk,
  TradingIcon,
} from '../../assets/Svg/sidebarAssets/icons';
import { ISidebarData } from './sidebar.types';

interface MenuSchema {
  id: number;
  title: string;
  to: string;
  icon: ComponentType<SvgIconProps>;
}

export const sidebarIconMapping = new Map<string, React.FC<any>>([
  ['riskManagement', TotalRisk],
  ['investmentResearch', SectorRiskIcon],
  ['tradingTools', CustomRiskIcon],
  // ['returns', ReturnsIcon],
  // ['alpha', AlphaIcon],
  // ['performance', PerformanceIcon],
  // ['trading', TradingIcon],
]);

export const sidebarItems: MenuSchema[] = [
  {
    id: 1,
    title: 'Dashboard',
    to: '/',
    icon: Dashboard,
  },
  {
    id: 2,
    title: 'Write Up',
    to: '/writeup',
    icon: WriteUp,
  },
  {
    id: 3,
    title: 'Dashboard',
    to: '/',
    icon: GamepadIcon,
  },
  {
    id: 4,
    title: 'Dashboard',
    to: '/',
    icon: HeatPumpIcon,
  },
  {
    id: 5,
    title: 'Logout',
    to: '/logout',
    icon: Logout,
  },
];

export const sidebarItemsData: ISidebarData[] = [
  {
    id: 'riskManagement',
    label: 'Risk Management',
    children: [
      {
        id: 'cioTools',
        label: 'CIO Tools',
        children: [
          {
            id: 'portfolioVolatility',
            label: 'Portfolio Volatility',
            children: [],
          },
          {
            id: 'coreRiskReport',
            label: 'Core Risk Report',
            children: [],
          },
          {
            id: 'WriteUp',
            label: 'Write-Up',
            children: [],
          },
          {
            id: 'riskReporting',
            label: 'Risk Reporting ',
            children: [],
          },
        ],
      },
      {
        id: 'portfolioTools',
        label: 'Portfolio Tools',
        children: [
          {
            id: 'realTimeRiskReporting',
            label: 'Real Time Risk Reporting ',
            children: [],
          },
          {
            id: 'realTimeScenarioReporting',
            label: 'Real Time Scenario Reporting',
            children: [],
          },
          {
            id: 'scenarioReporting',
            label: 'Scenario Reporting ',
            children: [],
          },
          {
            id: 'historicalRiskExposures',
            label: 'Historical Risk Exposures',
            children: [],
          },
        ],
      },
      {
        id: 'idealGenerationTools',
        label: 'Ideal Generation Tools',
        children: [
          {
            id: 'stockAlphaAnalysis',
            label: 'Stock Alpha Analysis',
            children: [],
          },
          {
            id: 'universeRealTimeAlpha',
            label: 'Universe Real Time Alpha ',
            children: [],
          },
          {
            id: 'portfolioRealTimeAlpha',
            label: 'Portfolio Real Time Alpha ',
            children: [],
          },
          {
            id: 'universeFactorExposureScreen',
            label: 'Universe Factor Exposure Screen ',
            children: [],
          },
          {
            id: 'universeCrowdingScreen',
            label: 'Universe Crowding Screen',
            children: [],
          },
        ],
      },
      {
        id: 'performanceAnalytics',
        label: 'Performance Analytics',
        children: [
          {
            id: 'intradaySpread',
            label: 'Intraday Spread',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 'investmentResearch',
    label: 'Investment Research',
    children: [
      {
        id: 'macro',
        label: 'Macro',
        children: [
          {
            id: 'housingDashboard',
            label: 'Housing Dashboard',
            children: [],
          },
        ],
      },
      {
        id: 'financials',
        label: 'Financials',
        children: [],
      },
      {
        id: 'businessServices',
        label: 'Business Services',
        children: [],
      },
      {
        id: 'healthCare',
        label: 'Healthcare',
        children: [],
      },
      {
        id: 'tmt',
        label: 'TMT',
        children: [],
      },
      {
        id: 'industrials',
        label: 'Industrials',
        children: [],
      },
      {
        id: 'consumer',
        label: 'Consumer',
        children: [],
      },
      {
        id: 'dataAlmanac',
        label: 'Data Almanac',
        children: [],
      },
    ],
  },

  {
    id: 'tradingTools',
    label: 'Trading Tools ',
    children: [
      {
        id: 'preMarketMovers',
        label: 'Pre Market Movers',
        children: [],
      },
      {
        id: 'postMarketMovers',
        label: 'Post Market Movers',
        children: [],
      },
      {
        id: 'basketDecomp',
        label: 'Basket Decomp',
        children: [],
      },
      {
        id: 'basketExposure',
        label: 'Basket Exposure',
        children: [],
      },
    ],
  },
];
