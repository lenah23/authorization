import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    proxy: {
      '/dicts/industries': {
        target: `${process.env.NEXT_PUBLIC_API_URL}/dicts/industries`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dicts\/industries/, ''),
      },
    },
  },
  preview: {
    host: true,
    strictPort: true,
    port: 3000,
  },
});
