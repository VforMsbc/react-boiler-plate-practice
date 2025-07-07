import {
  IBarChartProps,
  IBaseBlock,
  Identifier,
} from '@app/lib/shared-components';
import ChartJsImage from 'chartjs-to-image';
import { LineChartWProps } from 'lib/shared-components/src/components/LineChart/LineChart.types';
import { chartDataConfig, chartOPtsConfig } from './util';

const myChart = new ChartJsImage();
const generateChartUrl = (
  schema: IBaseBlock<IBarChartProps | LineChartWProps>
) => {
  myChart.setConfig({
    type: schema.identifier === Identifier.LineChartW ? 'line' : 'bar',
    data: chartDataConfig(schema),
    options: chartOPtsConfig(schema),
  });

  myChart.setWidth(900).setHeight(240);

  return myChart.getUrl();
};

let chartIdentifier = [Identifier.BarChart, Identifier.LineChartW];

const getUpdatedSchema = (schema: IBaseBlock<any>): IBaseBlock => {
  if (chartIdentifier.includes(schema.identifier)) {
    let imageUrl = generateChartUrl(schema);

    if (imageUrl) {
      // schema = {
      //   identifier: Identifier.Image,
      //   metadata: {
      //     style: {
      //       width: '100%',
      //       height: 'auto',
      //       minHeight: '150px',
      //     },
      //     url: imageUrl,
      //   },
      //   items: schema.items,
      // } as IBaseBlock<IImageProps>;
    }
  }
  if (schema.items && schema.items.length > 0) {
    schema = {
      ...schema,
      items: schema.items.map((it) => {
        return getUpdatedSchema(structuredClone(it));
      }) as any,
    };
  }
  return schema;
};

export { getUpdatedSchema };
