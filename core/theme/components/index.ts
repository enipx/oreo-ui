// @imports
import type { PackageTypes } from '../../constants/index.types';
import avatar from './avatar';
import button from './button';
import checkbox from './checkbox';
import divider from './divider';
import drawer from './drawer';
import dropdown from './dropdown';
import input from './input';
import modal from './modal';
import pinInput from './pin-input';
import radio from './radio';
import select from './select';
import spinner from './spinner';
import themeSwitch from './switch';
import textarea from './textarea';

// @file declarations
const components = (arg?: PackageTypes) => {
  return {
    avatar: avatar(arg),
    button: button(arg),
    divider: divider(arg),
    drawer: drawer(arg),
    dropdown: dropdown(arg),
    modal: modal(arg),
    input: input(arg),
    pinInput: pinInput(arg),
    select: select(arg),
    spinner: spinner(arg),
    textarea: textarea(arg),
    checkbox: checkbox(arg),
    radio: radio(arg),
    switch: themeSwitch(arg),
  };
};

// @exports
export default components;
