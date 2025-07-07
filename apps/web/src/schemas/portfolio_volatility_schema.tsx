import { IBaseBlock, Identifier } from '@app/lib/shared-components';
import { ContainerProps } from '@mui/material';

export const portfolio_volatility_schema = (
  rows: any[],
  headerCell: any[],
  lastUpdatedDate?: string,
  showTitle: boolean = true,
  minWidth?: number
): IBaseBlock<ContainerProps> => ({
  identifier: Identifier.Container,
  metadata: {
    sx: {
      padding: '16px',
      minWidth: minWidth ?? 'auto',
    },
    children: null,
  },
  items: [
    {
      identifier: Identifier.Typography,
      metadata: {
        id: 'title',
        variant: 'h5',
        label: 'Portfolio Volatility',
        children: null,
        style: {
          display: showTitle ? 'block' : 'none',
          textDecoration: 'underline',
        },
      },
      items: [],
    },
    {
      identifier: Identifier.Typography,
      metadata: {
        variant: 'h6',
        label: `Timestamp: ${lastUpdatedDate ?? '---'}`,
        style: {
          justifyContent: 'flex-end',
          display: lastUpdatedDate !== undefined ? 'flex' : 'none',
          marginBottom: 2,
        },
      },
      items: [],
    },
    {
      identifier: Identifier.WTable,
      metadata: {
        columns: [...headerCell]
          .sort((a, b) => a?.order - b?.order)
          .map((it, index) => ({
            ...it,
            align: index === 0 ? 'left' : 'center',
            headerStyle: {
              minWidth: '100px',
              textWrap: 'nowrap',
            },
            cellStyle: {
              minWidth: '100px',
            },
          })),
        rowData: rows ?? [],
        showPagination: false,
      },
      items: [],
    },
  ],
});
