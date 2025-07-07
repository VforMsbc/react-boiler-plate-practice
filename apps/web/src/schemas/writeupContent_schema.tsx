import { ContainerProps } from '@mui/material';
import {
  alpha30dHeadCells,
  alpha5dHeadCells,
  spBetaHeadCells,
  valueGrowthHeadCell,
} from '../components/Table/utils/headCells/writeupDetailTableHeadCells';
import {
  IInvestmentDetail,
  ITicker,
  IWritupDetail,
} from '../store/reducers/writeUp/type';
import {
  IBaseBlock,
  ITickerDetail,
  ITickerDetailItem,
  Identifier,
  TableColumns,
  tableFormater,
} from '@app/lib/shared-components';
import { round } from '../util/generalFunctions';

const getInvestmentTable = (
  headersData: TableColumns<IInvestmentDetail>[],
  investmentTypeDetail: any[]
) => {
  return [
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          display: 'flex',
          justifyContent: 'flex-start',
          alignSelf: 'flex-start',
          maxWidth: '700px',
          maxHeight: '500px',
          overflow: 'auto',
          height: '100%',
          width: '100%',
        },
      },
      items: [
        {
          identifier: Identifier.MTable,
          metadata: {
            columns: [...headersData].map((it) => ({
              ...it,
              formatter: (val: number) => {
                return tableFormater(val, it);
              },
            })),
            rowData:
              [...(investmentTypeDetail ?? [])].sort(
                (a, b) => -a.weight + b.weight
              ) ?? [],
            showPagination: false,
          },
          items: [],
        },
      ],
    },
  ];
};

const getRegularData = (
  details: IWritupDetail | null,
  tickerAlphaData: ITickerDetailItem[],
  isPdf: boolean
) => {
  return [
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: 2,
          width: '100%',
          '@media (max-width: 767px)': {
            flexDirection: 'column',
          },
        },
        children: null,
      },
      items: [
        {
          identifier: Identifier.WTable,
          metadata: {
            data: details?.ticker_detail ?? null,
            isLoading: false,
            headCells: valueGrowthHeadCell,
            ticker: details?.ticker,
          },
          items: [],
        },
        {
          identifier: Identifier.WTable,
          metadata: {
            data: details?.ticker_detail ?? null,
            isLoading: false,
            headCells: spBetaHeadCells,
          },
          items: [],
        },
      ],
    },
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
        },
        children: null,
      },
      items: [
        {
          identifier: Identifier.Container,
          metadata: {
            sx: {
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: 2,
              width: '100%',
              '@media (max-width: 767px)': {
                flexDirection: 'column',
              },
            },
            children: null,
          },
          items: [
            {
              identifier: Identifier.WTable,
              metadata: {
                data: details?.ticker_detail ?? null,
                isLoading: false,
                headCells: alpha5dHeadCells,
                hasHeaderTop: true,
                headerTopTitle: '5D',
                headerTopColSpan: 3,
                ticker: details?.ticker,
              },
              items: [],
            },
            {
              identifier: Identifier.WTable,
              metadata: {
                data: details?.ticker_detail ?? null,
                isLoading: false,
                headCells: alpha30dHeadCells,
                hasHeaderTop: true,
                headerTopTitle: '1 Month',
                headerTopColSpan: 3,
              },
              items: [],
            },
          ],
        },
        // ALPHA_CHART_RENDERING
        {
          identifier: Identifier.Container,
          metadata: {
            sx: {
              // position: 'relative',
              bgcolor: 'background.default',
              width: '100%',
              borderRadius: '10px',
              minHeight: isPdf ? '250px' : '350px',
              maxWidth: '860px',
            },
          },
          items: [
            {
              identifier: Identifier.LineChartW,
              metadata: {
                loading: false,
                listData: tickerAlphaData?.map((it) => ({
                  date: it.data_key,
                  value: it.data_value,
                })),
                title: '1 month alpha',
              },
              items: [],
            },
          ],
        },
      ],
    },
  ];
};

const getHistoricValuesWithLable = (
  title: string,
  historicalaveragediscount: ITickerDetailItem | null,
  historicalimpliedmultiplentm: ITickerDetailItem | null,
  isPdf: boolean
) => {
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

  let valuesJsx = historicValues.map((it) => {
    let value = '--- ';
    if (
      it.id === 'historicalaveragediscount' &&
      historicalaveragediscount?.data_value
    ) {
      value = round(historicalaveragediscount.data_value, 1).toFixed(1) + 'x';
    } else if (
      it.id === 'historicalimpliedmultiplentm' &&
      historicalimpliedmultiplentm?.data_value
    ) {
      value =
        round(historicalimpliedmultiplentm.data_value, 1).toFixed(1) + 'x';
    }
    return {
      identifier: Identifier.Typography,
      metadata: {
        variant: isPdf ? 'body1' : 'h6',
        label: `${it.label} = ${value}`,
        children: null,
      },
      items: [],
    };
  });

  return {
    identifier: Identifier.Container,
    metadata: {
      sx: {
        position: 'relative',
        bgcolor: 'transparent',
        borderRadius: '10px',
        mb: 3,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    items: [
      {
        identifier: Identifier.Container,
        metadata: {
          sx: {
            position: 'absolute',
            top: 0,
            left: 0,
          },
        },
        items: [...valuesJsx],
      },
      {
        identifier: Identifier.Typography,
        metadata: {
          variant: isPdf ? 'body1' : 'h5',
          label: title,
          sx: {
            display: 'flex',
            textTransform: 'capitalize',
            lineHeight: '21.51px',
            // fontWeight:isPdf?`400!important`:600
          },
          children: null,
        },
        items: [],
      },
    ],
  };
};

const getEpsOtherCharts = (
  selectedTicker: ITicker | null,
  tickerEPSData: ITickerDetailItem[],
  spxIndexEPSData: ITickerDetailItem[],
  tickerVsMarketIndex: ITickerDetailItem[],
  historicalaveragediscount: ITickerDetailItem | null,
  historicalimpliedmultiplentm: ITickerDetailItem | null,
  isPdf: boolean
) => {
  let lastChartItems = [];
  let historicValues = getHistoricValuesWithLable(
    `${selectedTicker?.ticker ?? ''} Multiple Vs. SPX Index`,
    historicalaveragediscount,
    historicalimpliedmultiplentm,
    isPdf
  );
  const multipleVsSpxBarChart = {
    identifier: Identifier.BarChart,
    metadata: {
      isShowHistoricData: false,
      listData: tickerVsMarketIndex,
      title: ``,
    },
    items: [],
  };
  lastChartItems.push(historicValues);
  lastChartItems.push(multipleVsSpxBarChart);

  return [
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          position: 'relative',
          bgcolor: 'background.default',
          width: '100%',
          borderRadius: '10px',
          minHeight: '300px',
          padding: '20px 20px',
          zIndex: 0,
        },
      },
      items: [
        {
          identifier: Identifier.BarChart,
          metadata: {
            isShowHistoricData: false,
            listData: tickerEPSData,
            title: `${selectedTicker?.ticker ?? ''} EPS 12M Forward Multiple`,
          },
          items: [],
        },
      ],
    },

    //SECOND_BAR_CHART_RENDERING
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          position: 'relative',
          bgcolor: 'background.default',
          width: '100%',
          borderRadius: '10px',
          minHeight: '300px',
          padding: '20px 20px',
        },
      },
      items: [
        {
          identifier: Identifier.BarChart,
          metadata: {
            isShowHistoricData: false,
            listData: spxIndexEPSData,
            title: 'SPX Index EPS 12M Forward Multiple',
          },
          items: [],
        },
      ],
    },

    //THIRED_BAR_CHART_RENDERING
    {
      identifier: Identifier.Container,
      metadata: {
        sx: {
          position: 'relative',
          bgcolor: 'background.default',
          width: '100%',
          borderRadius: '10px',
          minHeight: '300px',
          padding: '20px 20px',
        },
      },
      items: [...lastChartItems],
    },
  ];
};

export const writeupContent_schema = (
  details: IWritupDetail | null,
  selectedTicker: ITicker | null,
  tickerAlphaData: ITickerDetailItem[],
  tickerEPSData: ITickerDetailItem[],
  spxIndexEPSData: ITickerDetailItem[],
  tickerVsMarketIndex: ITickerDetailItem[],
  historicalaveragediscount: ITickerDetailItem | null,
  historicalimpliedmultiplentm: ITickerDetailItem | null,
  isPdf: boolean = false,
  investmentTypeDetail: any | null
): IBaseBlock<ContainerProps> => {
  let items: any = [...getRegularData(details, tickerAlphaData, isPdf)];

  items = [
    ...items,
    ...getEpsOtherCharts(
      selectedTicker,
      tickerEPSData,
      spxIndexEPSData,
      tickerVsMarketIndex,
      historicalaveragediscount,
      historicalimpliedmultiplentm,
      isPdf
    ),
  ];

  return {
    identifier: Identifier.Container,
    metadata: {
      sx: {
        width: '100%',
        minWidth: isPdf ? 1200 : 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        bgcolor: 'background.paper',
      },
      children: null,
    },
    items,
  };
};
