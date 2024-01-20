import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const extensions = [
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: extensions,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
      resolveExtensions: extensions,
    },
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// // https://vitejs.dev/config/
// // https://github.com/vitejs/vite/discussions/8195
// export default defineConfig({
//   define: {
//     global: "window",
//   },
//   optimizeDeps: {
//     include: [
//       "react-native-web",
//       'react-native-reanimated'
//       // "react-native-mmkv-storage",
//       // "react-native",
//       // "use-context-selector",
//       // "react-router-dom",
//       // "react-native-safe-area-context",
//       // "react-native-vector-icons",
//       // "react-native-paper",
//       // "react-native-mask-text",
//       // "@xstate/react",
//       // 'react-native-confirmation-code-field',
//       // 'react-native-linear-gradient',
//       // 'react-native-shimmer-placeholder',
//     ],
//     esbuildOptions: {
//       mainFields: ["module", "main"],
//       resolveExtensions: [".web.js", ".web.tsx", ".js", ".ts"],
//       plugins: [esbuildCommonjs(["@react-navigation/elements"])],
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
//   resolve: {
//     extensions: [".web.tsx", ".web.jsx", ".web.js", ".tsx", ".ts", ".js"],
//     alias: {
//       'react-native': 'react-native-web',
//       // 'react-native-linear-gradient': 'react-native-web-linear-gradient',
//     },
//   },
//   plugins: [
//     // {
//     //   name: 'treat-js-files-as-jsx',
//     //   async transform(code, id) {
//     //     if (!id.match(/src\/.*\.js$/))  return null

//     //     // Use the exposed transform from vite, instead of directly
//     //     // transforming with esbuild
//     //     return transformWithEsbuild(code, id, {
//     //       loader: 'jsx',
//     //       jsx: 'automatic',
//     //     })
//     //   },
//     // },
//     viteCommonjs(),
//     react()
//   ],
//   build: {
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     },
//   },
//   // esbuild: {
//   //   loader: 'tsx',
//   //   include: ["*.js"],
//   // },
// })
