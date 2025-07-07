import { SxProps, Theme } from '@mui/material';
import { ButtonClasses } from '@mui/material/Button';
import { MouseEvent } from 'react';

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		pending: true;
		buy: true;
		sell: true;
		engaged: true;
		inactive: true;
	}
	interface ButtonPropsSizeOverrides {
		grid: true;
	}
}

export interface ButtonProps {
	/**
	 * Button label.
	 */
	label: string;
	/**
	 * Override or extend the styles applied to the component.
	 */
	classes?: Partial<ButtonClasses>;
	/**
	 * Classes applied to the component.
	 */
	className?: string;
	/**
	 * The color of the component.
	 * It supports both default and custom theme colors, which can be added as shown in the
	 * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
	 * @default 'secondary'
	 */
	color?:
		| 'inherit'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'pending'
		| 'buy'
		| 'sell'
		| 'engaged'
		| 'inactive';
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * If `true`, no elevation is used.
	 * @default false
	 */
	disableElevation?: boolean;
	/**
	 * If `true`, the  keyboard focus ripple is disabled.
	 * @default false
	 */
	disableFocusRipple?: boolean;
	/**
	 * If `true`, the ripple effect is disabled.
	 *
	 * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
	 * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
	 * @default false
	 */
	disableRipple?: boolean;
	/**
	 * Element placed after the children.
	 */
	endIcon?: React.ReactNode;
	/**
	 * If `true`, the button will take up the full width of its container.
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * The URL to link to when the button is clicked.
	 * If defined, an `a` element will be used as the root node.
	 */
	href?: string;
	/**
	 * Handle event when clicked.
	 */
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	/**
	 * The size of the component.
	 * `small` is equivalent to the dense button styling.
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large' | 'grid';
	/**
	 * Element placed before the children.
	 */
	startIcon?: React.ReactNode;
	/**
	 * The system prop that allows defining system overrides as well as additional CSS styles.
	 */
	sx?: SxProps<Theme>;
	/**
	 * The variant to use.
	 * @default 'text'
	 */
	variant?: 'text' | 'outlined' | 'contained';

	/**
	 * The variant to use.
	 * @default 'button'
	 */
	type?: 'button' | 'submit' | 'reset';
}
