export interface IHeadCell<T extends Record<string, any> = {}> {
  id: keyof T | '';
  disablePadding?: boolean;
  label: string;
  numeric?: boolean;
  name?: string;
  isSortable?: boolean;
  isOptional?: boolean;
  suffix?: string;
  showRedForNegativeValue?: boolean;
  isShowIcon?: boolean;
  isEditIcon?: boolean;
}

export interface IUserDetails {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isadmin: boolean;
  isactive: boolean;
  loginattempt: number;
  permissions: string;
}

interface ITickerDetailItem {
  data_date: number;
  ticker: string;
  topic: string;
  data_value: number;
  data_key: string;
}

interface ITickerDetail {
  "30dalpha"?: ITickerDetailItem[];
  '30dfactor'?: ITickerDetailItem[];
  "30dtotal"?: ITickerDetailItem[];
  '5dalpha'?: ITickerDetailItem[];
  '5dfactor'?: ITickerDetailItem[];
  '5dtotal'?: ITickerDetailItem[];
  growth?: ITickerDetailItem[];
  momentum?: ITickerDetailItem[];
  spxbeta?: ITickerDetailItem[];
  factorbeta?: ITickerDetailItem[];
  shortinterest?: ITickerDetailItem[];
  eps12mforward?: ITickerDetailItem[];
  alpha?: ITickerDetailItem[];
  vsmarketindex?: ITickerDetailItem[];
  historicalaveragediscount?: ITickerDetailItem[];
  historicalimpliedmultiplentm?: ITickerDetailItem[];
  value?: ITickerDetailItem[];
  crowding?: ITickerDetailItem[];
  '3mmom'?: ITickerDetailItem[];
}

export { ITickerDetail, ITickerDetailItem };
