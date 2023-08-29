// @imports

import type {
  AccordionIconPositionTypes,
  AccordionThemedDefaultProps,
} from '../components.types';
import { flexCenterYStyle, transitionStyle } from '../css';
import type { SystemThemeParams, SystemThemeReturnType } from '../index.types';
import {
  baseBorderColor,
  baseColor,
  modeHandler,
  styleModeHandler,
} from './base';

import { convertHexToRgbaHandler } from '@/core/helpers/theme';

// @defaults
export const accordionDefaults = {
  transitionDuration: '200ms',
  iconOpacity: '0.5',
};

// @types
type AccordionSystemThemeParams = SystemThemeParams &
  AccordionThemedDefaultProps;

// @theme
export const buttonColor = baseColor;

export const borderBottomColor = baseBorderColor;

export const hoverBackgroundColor = modeHandler('gray.50', 'gray.800');

// @styles
export const accordionContainerDefaultStyle = (
  option: AccordionSystemThemeParams
) => {
  const { theme, type = 'web', variant } = option;

  const { seperated } = getAccordionVariant(variant);

  const baseStyle = `
    border-radius: ${seperated ? '0' : theme.radii.base};
    border-width: ${seperated ? '0' : '1px'};
    border-style: solid;
    overflow: hidden;
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

export const accordionButtonDefaultStyle = (
  option: AccordionSystemThemeParams
) => {
  const { theme, type = 'web' } = option;

  const hoverBackgroundColor = styleModeHandler({
    theme,
    light: convertHexToRgbaHandler(theme.colors.gray[50], 0.5),
    dark: convertHexToRgbaHandler(theme.colors.gray[800], 0.5),
  });

  const baseStyle = `
    background-color: transparent;
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 1px solid transparent;
    padding: ${theme.space[3]} ${theme.space[4]};
  `;

  const native = `
    ${baseStyle}
    ${flexCenterYStyle}
    flex-direction: row;
    border-bottom-width: 1px;
  `;

  const web = `
    ${baseStyle}
    ${flexCenterYStyle}
    ${transitionStyle()}
    appearance: none;
    cursor: pointer;
    font-size: ${theme.fontSizes.md};
    text-align: left;

    &:hover {
      background-color: ${hoverBackgroundColor};
    }
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const accordionPanelDefaultStyle = (
  option: AccordionSystemThemeParams
) => {
  const {
    type = 'web',
    transitionDuration = accordionDefaults.transitionDuration,
  } = option;

  const baseStyle = `
    height: 0;
    overflow: hidden;
  `;

  const native = `
    ${baseStyle}
  `;

  const web = `
    ${baseStyle}
    transition: height ${transitionDuration} ease;
  `;

  const res: SystemThemeReturnType = {
    native,
    web,
  };

  return res[type];
};

export const accordionIconOrderHandler = (
  position?: AccordionIconPositionTypes
) => {
  const order: { [key in AccordionIconPositionTypes]: number } = {
    left: -1,
    right: 1,
  };

  return order[position || 'right'];
};

export const getAccordionVariant = (
  variant?: AccordionThemedDefaultProps['variant']
) => {
  return {
    seperated: variant === 'separated',
  };
};
