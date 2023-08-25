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

// export type JColorTheme = {
//   name: string;
//   primary: string;
//   secondary: string;
//   background: string;
//   backgroundSecondary: string;
//   text: string;
//   textSecondary: string;
//   white: string;
// }
//
export type JColorTheme = {
  name: string; // the color theme's name
  primary1: string; // the primary color
  primary2: string;
  primary3: string;
  gray1: string; // the secondary color
  gray2: string;
  gray3: string;
  gray4: string;
  white: string;
  black: string;
}

export type JNavigatorData = {
  key: string;
  label: string;
  disabled?: boolean;
  icon?: string;
  click?: () => void;
}
