const { dirname, join } = require('path');
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions")
  ],

  "framework": {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@system': path.resolve(__dirname, '../src/system/'),
      '@components': path.resolve(__dirname, '../src/components/'),
    };

    return config;
  },

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
