// @imports
import {
  baseBackgroundColor,
  baseColor,
  linkColor,
} from '@/core/styled/themed/base';
import { createGlobalStyle } from '@/core/styled/web';
import defaultTheme from '@/core/theme';

// @file declarations
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => {
      return theme?.fonts?.body || defaultTheme().fonts.body;
    }};
    margin: 0;
    padding: 0;
    /**
      @important: Don't add color property here
    */
  }

  // ----- HTML
  html {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    touch-action: manipulation;
    color: ${baseColor};
  }
  
  // ---- Body
  body {
    background-color: ${baseBackgroundColor};
  }

  // ----- Elements
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  // ----- HTML5 reset for older browser
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover, &:active {
      color: inherit;
      text-decoration: underline;
    }
  }

  code, pre, code *, pre * {
    font-family: ${({ theme }) => {
      return theme?.fonts?.mono || defaultTheme().fonts.mono;
    }};
  }
`;
