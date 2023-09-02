const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          ['@system']: path.join(__dirname, './src/system/'),
          ['@components']: path.join(__dirname, './src/components/'),
          ['@helpers']: path.join(__dirname, './src/helpers/'),
        },
      },
    ],
  ],
};
