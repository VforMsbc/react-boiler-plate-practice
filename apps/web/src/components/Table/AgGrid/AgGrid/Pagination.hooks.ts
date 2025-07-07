import { useMemo, useState } from "react";
import { IUserDetailsData } from "../../types/type";

const usePagination = (list: IUserDetailsData[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(
    () => list.slice(indexOfFirstItem, indexOfLastItem),
    [list, indexOfFirstItem, indexOfLastItem]
  );

  const handleItemsPerPageChange = (newPage: number) => {
    setItemsPerPage(newPage);
    setCurrentPage(1);
  };

  return {
    currentItems,
    itemsPerPage,
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    handleItemsPerPageChange,
    setCurrentPage,
  };
};

export { usePagination };
