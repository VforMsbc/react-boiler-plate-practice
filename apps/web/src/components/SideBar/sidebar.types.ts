interface ISidebarData {
  id: string;
  label: string;
  link?: string;
  isParent?: boolean;
  isDisabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  icon?: JSX.Element | null;
  children: ISidebarData[];
}

export { ISidebarData };
