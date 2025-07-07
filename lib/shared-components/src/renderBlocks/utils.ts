import { BarChart } from '../components/BarChart';
import { LineChartW } from '../components/LineChart';
import { MButton } from '../components/button';
import { AppContainer } from '../components/container';
import { WTable } from '../components/tables';
import { Identifier } from './types';
import { AppTextField } from '../components/AppTextField';
import { Typography } from '../components/Typography';

type IComponentIdentifierMapping = {
  [key in Identifier]: React.FC<any>;
};

export const componentIdentifierMapping: IComponentIdentifierMapping = {
  [Identifier.Container]: AppContainer,
  [Identifier.Button]: MButton,
  [Identifier.WTable]: WTable,
  [Identifier.BarChart]: BarChart,
  [Identifier.LineChartW]: LineChartW,
  [Identifier.AppTextField]: AppTextField,
  [Identifier.Typography]: Typography,
};
