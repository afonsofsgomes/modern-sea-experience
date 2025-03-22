
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
      },
    },
    cssMinify: true,
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
    // Ensure images are processed and optimized
    assetsInlineLimit: 4096, // 4kb - smaller assets will be inlined
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    esbuildOptions: {
      target: 'es2020',
    }
  },
  css: {
    // Optimize CSS
    devSourcemap: true,
    postcss: {
      plugins: [
        // Already configured in postcss.config.js
      ],
    },
  },
  // Preload key assets
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      // Add preload hint for critical assets (like fonts)
      if (filename.endsWith('.woff2') || filename.endsWith('.woff')) {
        return { 
          relative: true,
          preload: true 
        };
      }
      return { relative: true };
    },
  },
}));
