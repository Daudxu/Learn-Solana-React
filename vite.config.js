import { defineConfig, transformWithEsbuild,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'  

// https://vitejs.dev/config/
export default ({ mode }) =>{
  return defineConfig({
    define: {'process.env': process.env},
    resolve: {
      alias: {
        process: "process/browser",
        stream: "stream-browserify",
        zlib: "browserify-zlib",    
        util: "util/",
        'src': resolve(__dirname, 'src/') 
      }
    },
    plugins: [
      react(),
  
      // Workaround
      {
        name: 'load+transform-js-files-as-jsx',
        async transform(code, id) {
          if (!id.match(/src\/.*\.js$/)) {
            return null;
          }
  
          // Use the exposed transform from vite, instead of directly
          // transforming with esbuild
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic', // 👈 this is important
          });
        },
      },
      // End workaround
  
    ],
  
    // Workaround before renaming .js to .jsx
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    // End workaround
  
  })
} 