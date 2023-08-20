export type JInputData = {
  value: string;
  validate: (value: string) => boolean;
}

export type JRadioData = {
  key: string;
  label: string;
  disabled?: boolean;
}

export type JCheckboxData = {
  key: string;
  label: string;
  disabled?: boolean;
}

export type JColorTheme = {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  backgroundSecondary: string;
  text: string;
  textSecondary: string;
  white: string;
}

export type JNavigatorData = {
  key: string;
  label: string;
  disabled?: boolean;
  icon?: string;
  click?: () => void;
}

export type PageSize = 'small' | 'medium' | 'large';
