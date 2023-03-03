import type { GridThemedStyledProps } from '../components.types';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';

import { SpacingKeys } from '@/core/theme/utilities/spacing';

// @defaults
export const gridDefaults = {
  columns: 1,
};

// @themes
type GridSystemThemeParams = SystemThemeParams & GridThemedStyledProps;

export const gridDefaultStyle = (options: GridSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    columns = gridDefaults.columns,
    inline,
    spacing,
    spacingX,
    spacingY,
  } = options;

  const grid = inline ? 'inline-grid' : 'grid';

  const gap = theme.space?.[spacing as SpacingKeys] || spacing || 'initial';

  const gapX = theme.space?.[spacingX as SpacingKeys] || spacingX || gap;

  const gapY = theme.space?.[spacingY as SpacingKeys] || spacingY || gap;

  const baseStyle = `
  `;

  const native = `
    ${baseStyle}
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const web = `
    ${baseStyle}
    display: ${grid};
    grid-template-columns: repeat(${columns}, minmax(0px, 1fr));
    gap: ${gap};
    column-gap: ${gapX};
    row-gap: ${gapY};
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const gridItemDefaultStyle = (options: GridSystemThemeParams) => {
  const {
    theme,
    type = 'web',
    isLastItem,
    isFirstItem,
    spacing,
    spacingX,
    spacingY,
  } = options;

  const gap = theme.space?.[spacing as SpacingKeys] || spacing || 0;

  const gapX = theme.space?.[spacingX as SpacingKeys] || spacingX || gap;

  const gapY = theme.space?.[spacingY as SpacingKeys] || spacingY || gap;

  const baseStyle = `
    flex: 1;
    margin-horizontal: ${gapX};
    margin-vertical: ${gapY};
    ${isFirstItem ? 'margin-left: 0;' : ''}
    ${isLastItem ? 'margin-right: 0;' : ''}
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

// @utilities
export const getChildrenGridRows = (options: {
  data: any[];
  columns?: number;
}) => {
  const { data, columns = 1 } = options;

  const columnsOccurenceCount = Math.ceil(data.length / columns);

  const newChildrenArray = [...Array(columnsOccurenceCount)].map(
    (_item, _index) => {
      const isFirst = _index === 0;
      const start = isFirst ? 0 : _index * columns;
      const end = isFirst ? columns : start + columns;

      return [...data.slice(start, end)];
    }
  );

  return newChildrenArray;
};
