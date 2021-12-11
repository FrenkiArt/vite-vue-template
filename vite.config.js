import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  outDir: path.join(__dirname, './dist/./'),

  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        index2: path.resolve(__dirname, 'all-elements.html'),
      },

      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: function (filename) {
          // console.log(filename);

          if (
            filename.name.includes('.jpg') ||
            filename.name.includes('.jpeg') ||
            filename.name.includes('.png') ||
            filename.name.includes('.webp')
          ) {
            return `assets/img/[name].[ext]`;
          } else if (filename.name.includes('.svg')) {
            return `assets/svg/[name].[ext]`;
          } else if (filename.name.includes('.css')) {
            return `assets/css/[name].[ext]`;
          } else if (
            filename.name.includes('.eot') ||
            filename.name.includes('.ttf') ||
            filename.name.includes('.woff')
          ) {
            return `assets/fonts/[name].[ext]`;
          } else {
            return `assets/[ext]/[name].[ext]`;
          }
        },
      },
    },
  },

  server: {
    open: '/index.html',
  },

  plugins: [vue()],
});
