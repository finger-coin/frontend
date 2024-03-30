import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        base: `/`,
        define: {
            'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
        },
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
            svgrPlugin({
                svgrOptions: {
                    ref: true,
                },
            }),
        ],
    };
});
