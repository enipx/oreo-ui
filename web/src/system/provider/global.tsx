// @imports
import {
  baseBackgroundColor,
  baseColor,
} from '@oreo-ui/core/dist/styled/themed/base';
import { createGlobalStyle } from '@oreo-ui/core/dist/styled/web';
import { theme as defaultTheme } from '@oreo-ui/core/dist/theme';

// @file declarations
export const GlobalStyle = createGlobalStyle`
  /***
      The new CSS reset - version 1.8.4 (last updated 14.2.2023)
      GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/

  /*
      Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
      - The "symbol *" part is to solve Firefox SVG sprite bug
  */
      *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Reapply the pointer cursor for anchor tags */
  a, button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul, menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
    border-style: none;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input, textarea {
    -webkit-user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
    display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
    - fix for the content editable attribute will work properly.
    - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;
  }

  /* Set default typo settings & color */
  html {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    touch-action: manipulation;
    color: ${baseColor};
  }
    

  /* Set default body style & update font */
  body {
    background-color: ${baseBackgroundColor};
    font-family: ${({ theme }) => {
      return theme?.fonts?.body || defaultTheme().fonts.body;
    }};
    margin: 0;
    padding: 0;
  }

  /* Anchor default style */
  a {
    text-decoration: none;
    color: inherit;

    &:hover, &:active {
      color: inherit;
      text-decoration: underline;
    }
  }

  /* Update special element font family to mono */
  code,
  pre,
  kbd,
  samp,
  code *,
  pre * {
    font-family: ${({ theme }) => {
      return theme?.fonts?.mono || defaultTheme().fonts.mono;
    }};
  }

  /**
  * Prevent sub and sup elements from affecting the line height in
  * all browsers.
  */
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
`;
