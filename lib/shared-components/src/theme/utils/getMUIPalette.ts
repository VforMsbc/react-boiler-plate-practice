import { ThemeOptions, Theme } from "@mui/material";
import { ThemeMode } from "..";
import themePalette from "./palette";

export const getMUIPalette = (
  themeMode: ThemeMode,
  theme: Theme
): ThemeOptions => {
  const scheme = themePalette[themeMode];
  return {
    palette: {
      ...theme.palette,
      ...scheme,
    },
  };
};
