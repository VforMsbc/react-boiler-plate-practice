import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MDialog {
  MuiPaper: {
    defaultProps?: ComponentsProps["MuiPaper"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiPaper"];
    variants?: ComponentsVariants["MuiPaper"];
  };
}
export const getMuiDialog = (theme: Theme): MDialog => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          "&.MuiDialog-paper": {
            background: theme.palette.background.default,
          },
        },
      },
    },
  };
};
