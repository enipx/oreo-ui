export type ObjectTypes = Record<string, any>;

export type ThemeModeKeys = 'dark' | 'light';

export type PackageTypes = 'web' | 'native';

export type ApplyDefaultThemeHandlerProps = ObjectTypes & {
  packageType: PackageTypes;
};
export type DimensionsUnitTypes = 'px' | 'em' | 'rem';

/**
 * This allow Partial type to work for nested objects
 * @source
 * - https://twitter.com/micdah/status/1580531114657316865
 * - https://grrr.tech/posts/2021/typescript-partial/
 */
export type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
} & {
  [attr in Exclude<string, keyof K>]?: any;
};
