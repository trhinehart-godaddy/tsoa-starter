import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/generated/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'neutral',
  outDir: 'build',
  target: 'es2016',
  clean: true,
  sourcemap: !watch,
  dts: !watch
}));
