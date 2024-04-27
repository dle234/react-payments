import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-payments/dist/',

  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
});
