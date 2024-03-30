import react from '@vitejs/plugin-react';
import { setDefaultResultOrder } from 'dns';
import { config } from 'dotenv-safe';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgrPlugin from 'vite-plugin-svgr';

config({ allowEmptyValues: true });
setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    base: `/`,
    build: {
        outDir: 'build',
    },
    css: {
        modules: {
            // Change `__` underscores to `--` dashes
            // for double-click selection of class part from devtools
            // Shorten for production to minimize bundle size
            generateScopedName: mode === 'development' ? '[name]--[local]--[hash:base64:5]' : '[hash:base64:5]',
        },
    },
    resolve: {
        alias: {
            '@domains': path.resolve(__dirname, './src/domains'),
            '@store': path.resolve(__dirname, './src/store'),
            '@api': path.resolve(__dirname, './src/api'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@vendor': path.resolve(__dirname, './src/vendor'),
            '@views': path.resolve(__dirname, './src/views'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    plugins: [
        react(),
        // NOTE: At the moment `effector-logger` seems to work correctly,
        // because it attached to domains manually and does not require babel plugin.
        // but just in case it breaks:
        // 1. Uninstall `@vitejs/plugin-react-swc`
        // 2. Install `@vitejs/plugin-react`
        // 3. Replace import
        // 4. Replace line above with block of code below.
        //
        // react({
        //     babel: {
        //         // Effector logger dependencies
        //         plugins: ['effector/babel-plugin'],
        //         babelrc: true,
        //     },
        // }),
        svgrPlugin({
            svgrOptions: {
                ref: true,
            },
        }),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,ts,jsx,tsx}"',
            },
        }),
    ],
}));
