interface ITicker {
  ticker: string;
  investment_type: string | null;
}

interface IWriteupSliceInitialState {
  isLoading: boolean;
  isLoadingDetails: boolean;
  isLoadingAlpha: boolean;
  isLoadingEps: boolean;
  selectedTicker: ITicker | null;
  setSelectedType: string | null;
  investmentList: string | null;
  writupDetails: IWritupDetail | null;
  investmentTypeDetail: IWritupDetail | null;
  tickerAlphaData: ITickerDetailItem[];
  tickerEPSData: ITickerDetailItem[];
  spxIndexEPSData: ITickerDetailItem[];
  tickerVsMarketIndex: ITickerDetailItem[];
  historicalaveragediscount: ITickerDetailItem | null;
  historicalimpliedmultiplentm: ITickerDetailItem | null;
  tickerList: ITicker[];
  investmentTypeList: string[];
  isError: boolean;
}

interface ITickerDetailItem {
  data_date: number;
  ticker: string;
  topic: string;
  data_value: number;
  data_key: string;
}

interface ITickerDetail {
  alpha30d?: ITickerDetailItem[];
  alpha30dfactor?: ITickerDetailItem[];
  alpha30dtotal?: ITickerDetailItem[];
  alpha5d?: ITickerDetailItem[];
  alpha5dfactor?: ITickerDetailItem[];
  alpha5dtotal?: ITickerDetailItem[];
  growth?: ITickerDetailItem[];
  momentum?: ITickerDetailItem[];
  spbeta?: ITickerDetailItem[];
  beta?: ITickerDetailItem[];
  sifloat?: ITickerDetailItem[];
  eps12mforward?: ITickerDetailItem[];
  alpha?: ITickerDetailItem[];
  vsmarketindex?: ITickerDetailItem[];
  historicalaveragediscount?: ITickerDetailItem[];
  historicalimpliedmultiplentm?: ITickerDetailItem[];
  value?: ITickerDetailItem[];
}

interface IWritupDetail {
  ticker: string;
  ticker_detail: ITickerDetail;
  member_weight?: IInvestmentDetail[];
}

interface IInvestmentDetail {
  ticker: string;
  weight: number;
}

export type {
  ITickerDetailItem,
  ITickerDetail,
  IWritupDetail,
  IWriteupSliceInitialState,
  IInvestmentDetail,
  ITicker,
};
