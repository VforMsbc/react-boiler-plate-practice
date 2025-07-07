/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
const FRONTEND_HOST = process.env.VITE_APP_HOST;
const FRONTEND_PORT = process.env.VITE_APP_PORT;

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web',
  server: {
    port: Number(FRONTEND_PORT) || 3003,
    host: FRONTEND_HOST || 'localhost',
  },
  preview: {
    port: 3001,
    host: FRONTEND_HOST || 'localhost',
  },
  plugins: [react(), nxViteTsPaths()],
  build: {
    outDir: '../../dist/apps/web',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/web',
      provider: 'v8',
    },
  },
});
