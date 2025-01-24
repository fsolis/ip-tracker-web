import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],

    server: {
        open: true,
        port: 5173
    },

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
