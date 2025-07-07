import {
  IUserFormInputFields,
  IUserFormCheckboxFields,
  IUserPermissions,
} from './types';

const userFormInputFields: IUserFormInputFields[] = [
  {
    key: 'first_name',
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter First Name',
  },
  {
    key: 'last_name',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter Last Name',
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email Id',
    placeholder: 'Enter Email Id',
  },
];

const userFormPasswordinputFields: IUserFormInputFields[] = [
  {
    key: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    type: 'password',
  },
  {
    key: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Enter Confirm Pasword',
    type: 'password',
  },
];

const userFormCheckboxFields: IUserFormCheckboxFields[] = [
  { id: 'isactive', label: 'Active', checked: false, disabled: false },
  { id: 'isadmin', label: 'Admin', checked: false, disabled: false },
  { id: 'islocked', label: 'Locked', checked: false, disabled: false },
];

const userFormPermissions: IUserPermissions[] = [
  {
    id: 'totalRisk',
    label: 'Total Risk',
    isParent: true,
    children: [
      {
        id: 'cioRiskReport',
        label: 'Cio Risk Report',
        checked: false,
        disabled: false,
      },
    ],
  },
  {
    id: 'sectorRisk',
    label: 'Sector Risk',
    isParent: true,
    children: [
      {
        id: 'finalcialRisk',
        label: 'Financial Risk',
        checked: false,
        disabled: false,
      },
      {
        id: 'businessServicesRisk',
        label: 'Business Services Risk',
        checked: false,
        disabled: false,
      },
      {
        id: 'consumerRisk',
        label: 'Consumer Risk',
        checked: false,
        disabled: false,
      },
      { id: 'tmtRisk', label: 'TMT Risk', checked: false, disabled: false },
    ],
  },

  {
    id: 'customRisk',
    label: 'Custome Risk',
    isParent: true,
    children: [
      {
        id: 'concentratedDetails',
        label: 'Concentrated Details',
        checked: false,
        disabled: false,
      },
      {
        id: 'sectorRisk',
        label: 'Sector Risk',
        checked: false,
        disabled: false,
      },
      {
        id: 'writeUp',
        label: 'Write-Up',
        checked: false,
        disabled: false,
      },
      { id: 'scenario', label: 'Scenario', checked: false, disabled: false },
      { id: 'almanac', label: 'Almanac', checked: false, disabled: false },
      {
        id: 'portfolioVolatility',
        label: 'portfolio Volatility',
        checked: false,
        disabled: false,
      },
    ],
  },

  {
    id: 'returns',
    label: 'Returns',
    isParent: true,
    children: [
      {
        id: 'finalcialReturns',
        label: 'Financial Returns',
        checked: false,
        disabled: false,
      },
      {
        id: 'businessServicesReturns',
        label: 'Business Services Returns',
        checked: false,
        disabled: false,
      },
      {
        id: 'consumerReturns',
        label: 'Consumer Returns',
        checked: false,
        disabled: false,
      },
      {
        id: 'tmtReturns',
        label: 'TMT Returns',
        checked: false,
        disabled: false,
      },
    ],
  },

  {
    id: 'alpha',
    label: 'Alpha',
    isParent: true,
    children: [
      {
        id: 'global1',
        label: 'Global 1',
        checked: false,
        disabled: false,
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        checked: false,
        disabled: false,
      },
      {
        id: 'pmMonitor',
        label: 'PM Monitor',
        checked: false,
        disabled: false,
      },
      {
        id: 'factorReturns',
        label: 'Factor Returns',
        checked: false,
        disabled: false,
      },
      {
        id: 'factorExposure',
        label: 'Factor Exposure',
        checked: false,
        disabled: false,
      },
    ],
  },

  {
    id: 'performance',
    label: 'Performance',
    isParent: true,
    children: [
      {
        id: 'intradaySpread',
        label: 'Intraday Spread',
        checked: false,
        disabled: false,
      },
    ],
  },

  {
    id: 'trading',
    label: 'Trading',
    isParent: true,
    children: [
      {
        id: 'preMarketMovers',
        label: 'Pre Market Movers',
        checked: false,
        disabled: false,
      },
      {
        id: 'basketExposurePre',
        label: 'Basket Exposure - Pre',
        checked: false,
        disabled: false,
      },
      {
        id: 'basketExposurePost',
        label: 'Basket Exposure - Post',
        checked: false,
        disabled: false,
      },
      {
        id: 'basketDecomp',
        label: 'Basket Decomp',
        checked: false,
        disabled: false,
      },
      {
        id: 'basketExposure',
        label: 'Basket Exposure',
        checked: false,
        disabled: false,
      },
      {
        id: 'postMarketMovers',
        label: 'Post Market Movers',
        checked: false,
        disabled: false,
      },
    ],
  },
];

export {
  userFormInputFields,
  userFormPasswordinputFields,
  userFormPermissions,
  userFormCheckboxFields,
};
