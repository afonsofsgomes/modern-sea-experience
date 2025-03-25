
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080, // Using port 8080 as required
    hmr: {
      // HMR configurations to fix WebSocket connection issues
      clientPort: 8080, // Match client port
      // For production environment, disable HMR (optional)
      ...(mode === 'production' && { enabled: false }),
    },
    // Security settings to address GitHub alerts
    fs: {
      // Restricts file serving to only the allowed directories
      allow: [path.resolve(__dirname)],
      // Explicitly deny access to sensitive directories
      deny: ['.env', '.env.*', '*.{pem,crt,key}', 'node_modules/.cache'],
      strict: true,
    },
    // Prevent CORS issues with development server
    cors: true,
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
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-slot'],
          router: ['react-router-dom'],
        },
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4KB - inline small assets
    sourcemap: false,
    chunkSizeWarningLimit: 1000, // KB
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    // This option helps prevent the Babel RegExp issue
    esbuildOptions: {
      target: 'es2020',
    },
  },
  css: {
    // Optimize CSS
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local',
    },
  },
  // Fix for security vulnerabilities in the development server
  preview: {
    port: 8080,
    strictPort: true,
    cors: true,
  },
}));
