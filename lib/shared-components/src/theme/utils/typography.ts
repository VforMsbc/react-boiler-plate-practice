import { Components } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { MGradientColours, MGradients } from './gradients';

import MColours from './colours';

const disabledContainedButtonStyles = {
  '&.Mui-disabled': {
    '&.light': {
      color: MColours.greyScale[200],
      background: MColours.greyScale[50],
    },
    '&.dark': {
      color: MColours.greyScale[600],
      background: MColours.greyScale[800],
    },
  },
};

const disabledOutlinedButtonStyles = {
  '&.Mui-disabled': {
    '&.light': {
      color: MColours.greyScale[200],
      borderColor: MColours.greyScale[200],
    },
    '&.dark': {
      color: MColours.greyScale[600],
      borderColor: MColours.greyScale[600],
    },
  },
};

export const typography: TypographyOptions = {
  allVariants: {
    fontFamily: ['Work Sans', 'sans-serif'].join(','),
  },
  h1: {
    fontSize: '42px',
    lineHeight: '44px',
    fontWeight: 600,
  },
  h2: {
    fontSize: '34px',
    lineHeight: '40px',
    fontWeight: 600,
  },
  h3: {
    fontSize: '27px',
    lineHeight: '32px',
    fontWeight: 600,
  },
  h4: {
    fontSize: '21px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  h5: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  h6: {
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  body1: {
    fontSize: '14px',
    lineHeight: 'normal',
    fontWeight: 400,
  },
  // h6: {
  // 	fontSize: '13px',
  // 	lineHeight: '20px',
  // 	fontWeight: 500,
  // },
  // body1: {
  // 	fontSize: '11px',
  // 	lineHeight: '16px',
  // 	fontWeight: 400,
  // },
  body2: {
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: '9px',
    lineHeight: '12px',
    fontWeight: 400,
  },
  subtitle2: {
    fontSize: '9px',
    lineHeight: '12px',
    fontWeight: 600,
  },
  button: {
    textTransform: 'capitalize',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  caption: {
    fontSize: '11px',
  },
  overline: {
    fontSize: '11px',
  },
};

export const componentsTypography: Components = {
  // todo: remove and create a wrapper component
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '14px',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: '16px',
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontSize: '11px',
        fontWeight: 600,
        backgroundColor: MColours.greyScale[500],
        fontFamily: ['Work Sans', 'sans-serif'].join(','),
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        '&.dark.MuiSlider-root.Mui-disabled': {
          color: MColours.greyScale[600],
        },
        '&.light.MuiSlider-root.Mui-disabled': {
          color: MColours.greyScale[200],
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      sizeMedium: {
        fontSize: '15px',
      },
      sizeSmall: {
        fontSize: '13px',
      },
      outlined: {
        '&.MuiButton-outlinedInactive': {
          '&.light': {
            color: MColours.greyScale[500],
            borderColor: MColours.greyScale[500],
          },
          '&.dark': {
            color: MColours.greyScale[400],
            borderColor: MColours.greyScale[400],
          },
          ...disabledOutlinedButtonStyles,
        },
        '&.MuiButton-outlinedPending': {
          ...disabledOutlinedButtonStyles,
        },
        '&.MuiButton-outlinedBuy': {
          ...disabledOutlinedButtonStyles,
        },
        '&.MuiButton-outlinedSell': {
          ...disabledOutlinedButtonStyles,
        },
        '&.MuiButton-outlinedEngaged': {
          ...disabledOutlinedButtonStyles,
        },
      },
      contained: {
        '&.MuiButton-containedPending': {
          background: MGradients.pending,
          color: MGradientColours.pending.contrastText,
          ...disabledContainedButtonStyles,
        },
        '&.MuiButton-containedBuy': {
          '&.light': {
            background: MGradients.buyLight,
            color: 'white',
          },
          '&.dark': {
            background: MGradients.blue,
            color: 'black',
          },
          ...disabledContainedButtonStyles,
        },
        '&.MuiButton-containedSell': {
          '&.light': {
            background: MGradients.sell,
            color: 'white',
          },
          '&.dark': {
            background: MGradients.sell,
            color: 'black',
          },
          ...disabledContainedButtonStyles,
        },
        '&.MuiButton-containedEngaged': {
          background: MGradients.pending,
          '&.light': {
            color: 'white',
          },
          '&.dark': {
            color: 'black',
          },
          ...disabledContainedButtonStyles,
        },
        '&.MuiButton-containedInactive': {
          '&.light': {
            background: MGradients.inactiveLight,
            color: 'black',
          },
          '&.dark': {
            background: MGradients.inactiveDark,
            color: MColours.greyScale[100],
          },
          ...disabledContainedButtonStyles,
        },
      },
      root: {
        '&.MuiButton-root.MuiButton-sizeGrid': {
          height: '18px',
          fontSize: '14px',
          lineHeight: '0px',
          padding: '0px 10px',
        },
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      sizeMedium: {
        '& .MuiSwitch-switchBase': {
          margin: 12,
          padding: 0,
        },
        '& .MuiSwitch-thumb': {
          width: '14px',
          height: '14px',
        },
      },
      sizeSmall: {
        '& .MuiSwitch-switchBase': {
          margin: 7,
          padding: 0,
        },
        '& .MuiSwitch-thumb': {
          width: '10px',
          height: '10px',
        },
      },
      root: {
        '&.MuiSwitch-root.MuiSwitch-sizeGrid': {
          width: '40px',
          height: '20px',
          padding: '3px',
          fontSize: '11px',
          '.MuiButtonBase-root.MuiSwitch-switchBase': {
            margin: '3px',
            padding: '0px',
            '.MuiSwitch-thumb': {
              width: '14px',
              height: '14px',
            },
          },
        },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
          width: 12,
          height: 12,
        },
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
          width: 14,
          height: 14,
        },
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeLarge': {
          width: 18,
          height: 18,
        },
      },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
          width: 12,
          height: 12,
        },
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
          width: 14,
          height: 14,
        },
        '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeLarge': {
          width: 18,
          height: 18,
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .Mui-disabled': {
          opacity: 0.5,
        },
        '&.light .Mui-disabled': {
          backgroundColor: MColours.greyScale[50],
        },
        '&.dark .Mui-disabled': {
          backgroundColor: MColours.greyScale[700],
        },
        '&.light .MuiFilledInput-root': {
          backgroundColor: MColours.greyScale[50],
        },
        '&.dark .MuiFilledInput-root': {
          backgroundColor: MColours.greyScale[700],
        },
        '& label[data-shrink=true].MuiInputLabel-standard': {
          transform: 'translate(0, -1.5px) scale(0.85)',
        },
        '& label[data-shrink=true].MuiInputLabel-outlined': {
          transform: 'translate(14px, -5px) scale(0.85)',
        },
        '& label[data-shrink=true].MuiInputLabel-filled': {
          transform: 'translate(12px, 7px) scale(0.85)',
        },
        '&.light .MuiOutlinedInput-root': {
          borderColor: MColours.greyScale[200],
        },
        '&.dark .MuiOutlinedInput-root': {
          borderColor: MColours.greyScale[600],
        },
      },
    },
  },
};
