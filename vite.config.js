import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          './node_modules/@uswds',
          './node_modules/@uswds/uswds/packages',
        ],
      },
    },
  },
  build: {
    // Build both ESM and CommonJS versions of the library
    outDir: 'lib',
    target: 'esnext',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        uswds: resolve(__dirname, 'src/uswds.ts'),
      },
      name: '@trussworks/react-uswds',
      // the proper extensions will be added
      formats: ['es', 'cjs'],
      fileName: (format) => `[name].${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.eot', '**/*.ttf', '**/*.woff', '**/*.woff2'],
})