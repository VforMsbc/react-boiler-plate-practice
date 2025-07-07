import { useCallback, useMemo } from "react";

const useAgGrid = () => {
  const rowHeight = 42;

  const defaultColDef = useMemo(() => {
    return {
      floatingFilter: false,
      enableRowGroup: false,
      sortable: true,
      suppressMovable: true,
      cellStyle: {
        fontFamily: "Work Sans, sans-serif",
        textAlign: "center",
        leadingTrim: "both",
        textEdge: "cap",
        padding: "6px 16px",
        fontSize: "13px",
        lineHeight: "24px",
        fontWeight: 400,
      },
    };
  }, []);

  const getRowHeight = useCallback(() => {
    return rowHeight;
  }, [rowHeight]);

  return { defaultColDef, getRowHeight };
};

export default useAgGrid;
