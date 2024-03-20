/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      sCache: true,
      lazyCompilation: true,
    },
  },
  // docs: {
  //   autodocs: "tag",
  // },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  // staticDirs: ["..\\public"],
  features: { modernInlineRender: true },
};
export default config;
