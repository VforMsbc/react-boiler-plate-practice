import {
  Theme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

interface MFormLabel {
  MuiFormLabel: {
    defaultProps?: ComponentsProps["MuiFormLabel"];
    styleOverrides?: ComponentsOverrides<Theme>["MuiFormLabel"];
    variants?: ComponentsVariants["MuiFormLabel"];
  };
}
export const getMuiFormLabel = (theme: Theme): MFormLabel => {
  return {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-root": {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  };
};
