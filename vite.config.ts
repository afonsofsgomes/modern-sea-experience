
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080, // Changed to port 8080 as required
    hmr: {
      // HMR configurations to fix WebSocket connection issues
      clientPort: 8080, // Match client port
      // For production environment, disable HMR
      ...(mode === 'production' && { enabled: false }),
    },
  },
  plugins: [
    react({
      // Use SWC's built-in optimization features
      plugins: [],
      // Optimize component memoization
      jsxImportSource: undefined,
      // Remove fastRefresh as it's not in the Options type
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_getters: true,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_methods: true
      },
      format: {
        comments: false,
        ecma: 2020,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: id => {
          // Create more granular chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@radix-ui')) return 'vendor-radix';
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('lucide')) return 'vendor-icons';
            return 'vendor'; // All other dependencies
          }
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
    },
    target: 'es2020', // Modern target for better performance
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4KB
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // KB
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    esbuildOptions: {
      target: 'es2020',
      // Optimize bundles for modern browsers
      supported: {
        'async-await': true,
        'arrow-functions': true,
        'async-function': true,
        bigint: true,
      },
    }
  },
  css: {
    // Optimize CSS
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local',
    },
  },
  // Reduce pre-bundling overhead
  cacheDir: '.vite',
}));
