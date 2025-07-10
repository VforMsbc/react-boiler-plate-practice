import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  Pagination,
  Typography,
  FormControl,
  InputLabel,
  useTheme,
} from '@mui/material';
import { useThemeMode } from '@app/lib/shared-components';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChangeItemsPerPage: (value: number) => void;
  setCurrentPage: (page: number) => void;
  indexOfFirstItem: number;
  indexOfLastItem: number;
  setItemsPerPage: (size: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onChangeItemsPerPage,
  setCurrentPage,
  indexOfFirstItem,
  indexOfLastItem,
  setItemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    onChangeItemsPerPage(Number(event.target.value));
  };

  const theme = useThemeMode();
  // console.log(theme);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
      flexWrap="wrap"
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalItems)}{' '}
        of {totalItems} entries
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <FormControl size="small">
          <InputLabel id="rows-per-page-label">Rows</InputLabel>
          <Select
            labelId="rows-per-page-label"
            value={itemsPerPage}
            label="Rows"
          >
            {[5, 10, 15, 20, 25, 50].map((size) => (
              <MenuItem
                onClick={() => setItemsPerPage(size)}
                key={size}
                value={size}
              >
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          size="small"
        />
      </Box>
    </Box>
  );
};

export default PaginationComponent;
