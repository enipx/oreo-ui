import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Input } from './input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '320px',
  placeholder: 'Enter name',
};

export const Email = Template.bind({});
Email.args = {
  width: '280px',
  label: 'Email',
  icon: (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.83267 9.0986C8.33092 9.0986 7.83067 8.93285 7.41217 8.60135L4.04842 5.88935C3.80617 5.69435 3.76867 5.3396 3.96292 5.0981C4.15867 4.85735 4.51267 4.8191 4.75417 5.01335L8.11492 7.72235C8.53717 8.05685 9.13192 8.05685 9.55717 7.71935L12.8842 5.01485C13.1257 4.8176 13.4797 4.8551 13.6762 5.0966C13.8719 5.33735 13.8352 5.69135 13.5944 5.88785L10.2614 8.59685C9.83992 8.93135 9.33592 9.0986 8.83267 9.0986"
        fill="currentColor"
      />
      <mask
        id="mask0_238_263"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="16">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.75 0.5H16.8749V15.125H0.75V0.5Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_238_263)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.12919 14H12.4942C12.4957 13.9985 12.5017 14 12.5062 14C13.3619 14 14.1209 13.694 14.7029 13.1128C15.3787 12.44 15.7499 11.4732 15.7499 10.391V5.24C15.7499 3.14525 14.3804 1.625 12.4942 1.625H5.13069C3.24444 1.625 1.87494 3.14525 1.87494 5.24V10.391C1.87494 11.4732 2.24694 12.44 2.92194 13.1128C3.50394 13.694 4.26369 14 5.11869 14H5.12919ZM5.11644 15.125C3.95919 15.125 2.92569 14.705 2.12769 13.91C1.23894 13.0235 0.749939 11.774 0.749939 10.391V5.24C0.749939 2.53775 2.63319 0.5 5.13069 0.5H12.4942C14.9917 0.5 16.8749 2.53775 16.8749 5.24V10.391C16.8749 11.774 16.3859 13.0235 15.4972 13.91C14.6999 14.7042 13.6657 15.125 12.5062 15.125H12.4942H5.13069H5.11644Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
};

export const Hint = Template.bind({});
Hint.args = {
  width: '320px',
  label: 'Username',
  rightIcon: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00004 1.33334C3.87537 1.33334 1.33337 3.87534 1.33337 7C1.33337 10.1247 3.87537 12.6667 7.00004 12.6667C10.1247 12.6667 12.6667 10.1247 12.6667 7C12.6667 3.87534 10.1247 1.33334 7.00004 1.33334M7.00004 13.6667C3.32404 13.6667 0.333374 10.676 0.333374 7C0.333374 3.324 3.32404 0.333336 7.00004 0.333336C10.676 0.333336 13.6667 3.324 13.6667 7C13.6667 10.676 10.676 13.6667 7.00004 13.6667"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99609 7.91534C6.72009 7.91534 6.49609 7.69134 6.49609 7.41534V4.46934C6.49609 4.19334 6.72009 3.96934 6.99609 3.96934C7.27209 3.96934 7.49609 4.19334 7.49609 4.46934V7.41534C7.49609 7.69134 7.27209 7.91534 6.99609 7.91534"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00264 10.1973C6.63397 10.1973 6.33264 9.89927 6.33264 9.5306C6.33264 9.16194 6.62797 8.86394 6.99597 8.86394H7.00264C7.37131 8.86394 7.66931 9.16194 7.66931 9.5306C7.66931 9.89927 7.37131 10.1973 7.00264 10.1973"
        fill="currentColor"
      />
    </svg>
  ),
  hint: 'Enter at least 4 characters',
};

export const Password = Template.bind({});
Password.args = {
  width: '320px',
  label: 'Password',
  hint: 'Please enter a valid email',
  type: 'password',
};
