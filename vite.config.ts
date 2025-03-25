
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080, // Changed to 8080 as required
    hmr: {
      // HMR configurations to fix WebSocket connection issues
      clientPort: 8080, // Match client port
      // For production environment, disable HMR (optional)
      ...(mode === 'production' && { enabled: false }),
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
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
      },
      format: {
        comments: false,
        indent_level: 0,
      },
    },
    cssMinify: true, // Ensure CSS is minified
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-slot'],
          router: ['react-router-dom'],
        },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').at(1);
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4KB - inline small assets
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // KB
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
  css: {
    // Optimize CSS
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local',
    },
    postcss: {
      plugins: [
        // Import plugins using import statements in postcss.config.js instead
      ],
    },
  },
}));
