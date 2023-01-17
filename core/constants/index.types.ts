export type ObjectTypes = Record<string, any>;

export type ThemeModeKeys = 'dark' | 'light';

export type PackageTypes = 'web' | 'native';

export type ApplyDefaultThemeHandlerProps = ObjectTypes & {
  packageType: PackageTypes;
};
export type DimensionsUnitTypes = 'px' | 'em' | 'rem';
