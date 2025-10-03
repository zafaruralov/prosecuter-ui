

import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
    
    // Add Tailwind CSS v4 Vite plugin
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    
    return config
  }
};
export default config;