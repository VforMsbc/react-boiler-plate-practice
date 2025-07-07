import { round } from '../../../utils/generalFunction';
import { IHeadCell, ITickerDetailItem } from '../../types/type';
import { CombinedTickerDetails } from './headCells/writeupDetailTableHeadCells';

const getValueAndParenthesis = <
  T,
  U extends ITickerDetailItem = ITickerDetailItem,
  R extends CombinedTickerDetails = CombinedTickerDetails
>(
  cell: IHeadCell<R>,
  data: T,
  ticker: string | undefined
) => {
  const key = cell.id as keyof typeof data;
  let value = '';
  let showInParenthesis = false;
  if (ticker && key === 'ticker') value = ticker;
  if (data && key && key !== 'ticker' && data[key]) {
    const actualVal = (data[key] as U[])[0]?.data_value;
    let data_value = parseFloat(round(actualVal, 4).toString());

    if (actualVal && actualVal < 0 && cell.showRedForNegativeValue) {
      data_value = data_value * -1;
      showInParenthesis = true;
    }
    value = data_value.toString() ?? '';

    if (value && cell.suffix) {
      if (cell.suffix === '%') {
        value = (+value * 100).toFixed(2) + cell.suffix;
      } else {
        value = value + cell.suffix;
      }
      return { value, showInParenthesis };
    }

    value = (+value).toFixed(2);
  }

  return { value, showInParenthesis };
};

export { getValueAndParenthesis };
