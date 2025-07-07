import { Box, IconButton } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import '@/assets/scss/agGrid.scss';
import { IParms, Props } from './type';
import { usePagination } from './Pagination.hooks';
import { gridIcons } from './style';
import { TickIcon, EditIcon } from '../../../../assets/Svg/index';
// import { InlineLoader } from 'apps/web/src/util/loader';
// import PaginationComponent from '../../../Pagination';
import { MGrid } from '@jp/material-core-master';
import gridheadCells from './util';
import useAgGrid from './AgGrid.hooks';

export default function AgGridTable({
  list,
  isLoading,
  handleOpenDialog,
}: Props) {
  const { defaultColDef, getRowHeight } = useAgGrid();
  const pagination = true;
  const paginationPageSize = 10;
  const {
    currentItems,
    itemsPerPage,
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    handleItemsPerPageChange,
    setCurrentPage,
  } = usePagination(list);

  const components = {
    isAdminCellRenderer: (params: IParms) => (
      <IconButton sx={gridIcons}>
        {params.data.isadmin ? <TickIcon /> : ''}
      </IconButton>
    ),
    isActiveCellRenderer: (params: IParms) => (
      <IconButton sx={gridIcons}>
        {params.data.isactive ? <TickIcon /> : ''}
      </IconButton>
    ),
    isLockedCellRenderer: (params: IParms) => (
      <IconButton sx={gridIcons}>
        {params.data.loginattempt ? <TickIcon /> : ''}
      </IconButton>
    ),
    isEditCellRenderer: (params: IParms) => (
      <IconButton
        sx={gridIcons}
        onClick={() => handleOpenDialog && handleOpenDialog(params.data)}
      >
        <EditIcon />
      </IconButton>
    ),
  };

  const gridOptions = {
    overlayLoading: isLoading,
    overlayNoRowsTemplate: isLoading ? `Loading` : 'No Data Found',
  };

  return (
    <Box className="ag-theme-alpine" width={'100%'} height={'100%'}>
      <MGrid
        pagination={pagination}
        paginationPageSize={paginationPageSize}
      
        columnDefs={gridheadCells}
        rowData={currentItems}
        onCellClicked={() => {}}
        rowSelection="single"
        defaultColDef={defaultColDef}
        getRowHeight={getRowHeight}
        domLayout="autoHeight"
        components={components}
        loadingCellRenderer={isLoading}
        {...gridOptions}
      />

      {/* <PaginationComponent
        totalItems={list.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangeItemsPerPage={handleItemsPerPageChange}
        setCurrentPage={setCurrentPage}
        list={list}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
      /> */}
    </Box>
  );
}
