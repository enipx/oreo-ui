import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import analyze from 'rollup-plugin-analyzer';
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.sass', '.scss'],
});

const outputOptions = {
  exports: 'named',
  sourcemap: true,
  banner: `/*
  * Oreo UI
  * {@link https://github.com/enipx/oreo-ui}
  * @copyright Hashir (@enipx)
  * @license MIT
  */
'use client';`,
};

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: './dist/commonjs/index.js',
        format: 'cjs',
        ...outputOptions,
      },
      {
        file: './dist/module/index.js',
        format: 'esm',
        ...outputOptions,
      },
    ],
    plugins: [
      cleaner({
        targets: ['./dist'],
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, '..') },
          {
            find: '@system',
            replacement: path.resolve(__dirname, 'src/system'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
        ],
        customResolver,
      }),
      resolve(),
      peerDepsExternal(),
      commonjs(),
      esbuild({
        minifyIdentifiers: true,
        minifyWhitespace: true,
        tsconfig: 'tsconfig.json', // default
        // Add extra loaders
        loaders: {
          // Add .json files support
          // require @rollup/plugin-commonjs
          '.json': 'json',
          // Enable JSX in .js files too
          '.js': 'jsx',
          '.ts': 'tsx',
        },
      }),
      json(),
      analyze({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
  },
  {
    input: './src/index.tsx',
    output: [
      {
        file: './dist/typescript/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dts(),
      analyze({
        hideDeps: true,
        limit: 0,
        summaryOnly: true,
      }),
    ],
  },
];
