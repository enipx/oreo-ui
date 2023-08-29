import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'es2019',
  dts: true,
  sourcemap: true,
  banner: {
    js: "'use client'",
  },
  clean: true,
});
