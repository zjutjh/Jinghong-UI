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
}
