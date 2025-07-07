import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export function createViteConfig(options = {}) {
  const { port = 3000, dirname } = options;

  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      port,
    },
    resolve: {
      alias: {
        '@': path.resolve(dirname, './src'),
        '@repo/ui': path.resolve(dirname, '../../packages/ui/src'),
        // 앱별 alias 추가
        '@user': path.resolve(dirname, '../../apps/user/src'),
        '@dealer': path.resolve(dirname, '../../apps/dealer/src'),
      },
    },
  });
}
