import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          privacy: path.resolve(__dirname, 'privacy.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          disclaimer: path.resolve(__dirname, 'disclaimer.html'),
          compress: path.resolve(__dirname, 'tool-compress-pdf.html'),
          merge: path.resolve(__dirname, 'tool-merge-pdf.html'),
          split: path.resolve(__dirname, 'tool-split-pdf.html'),
          edit: path.resolve(__dirname, 'tool-edit-pdf.html'),
          imageToPdf: path.resolve(__dirname, 'tool-image-to-pdf.html'),
          pdfToImage: path.resolve(__dirname, 'tool-pdf-to-image.html'),
          ocr: path.resolve(__dirname, 'tool-ocr-pdf.html'),
          watermark: path.resolve(__dirname, 'tool-watermark-pdf.html'),
          admin: path.resolve(__dirname, 'admin.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
