import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MTabs {
  MuiTabs: {
    defaultProps?: ComponentsProps["MuiTabs"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiTabs"];
    variants?: ComponentsVariants["MuiTabs"];
  };
}

export const getTabs = (_: Theme): MTabs => {
  return {
    MuiTabs: {
      styleOverrides: {
        root: {
          fontSize: "28px",
        },
        indicator: () => ({
          display: "none",
        }),
      },
    },
  };
};

interface MTab {
  MuiTab: {
    defaultProps?: ComponentsProps["MuiTab"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiTab"];
    variants?: ComponentsVariants["MuiTab"];
  };
}

export const getTab = (theme: Theme): MTab => {
  return {
    MuiTab: {
      styleOverrides: {
        root: () => ({
          fontWeight: 400,
          fontSize: "13px",
          borderRight: "1px solid #202226",
          minHeight: "0",
          maxHeight: "25px",
          margin: "13px 0px",
          color: theme.palette.text.primary,
          "&:last-child": {
            borderRight: "0",
          },
        }),
      },
    },
  };
};
