import { Theme } from '@mui/material';
import { getButton } from '../components/Button';
import { getFormHelperText } from '../components/FormHelperText';
import { getTableCell } from '../components/TableCell';
import { getTab, getTabs } from '../components/Tabs';
import { getMenu } from '../components/Menu';
import { getMenuItem } from '../components/MenuItem';
import { getButtonBase } from '../components/ButtonBase';
import { getMuiDialog } from '../components/Dialog';
import { getMuiFormLabel } from '../components/FormLabel';
import { getAutoComplete } from '../components/AutoComplete';
import { getTableSortLabel } from '../components/TableSortLable';
import { getTable } from '../components/Table';

type MComponents = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme) => {
  //const { palette } = theme;
  return {
    components: {
      ...getButton(theme),
      ...getFormHelperText(theme),
      ...getTableCell(theme),
      ...getTabs(theme),
      ...getTab(theme),
      ...getMenu(),
      ...getMenuItem(),
      ...getButtonBase(theme),
      ...getMuiDialog(theme),
      ...getMuiFormLabel(theme),
      ...getAutoComplete(theme),
      ...getTable(theme),
      ...getTableSortLabel(theme),
    },
  } as MComponents;
};
