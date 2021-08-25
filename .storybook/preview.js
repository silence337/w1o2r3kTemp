import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"; // storybook 에 모바일 기기별 viewport를 추가해봅니다.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showPanel: false,
  },
  layout: "fullscreen",
  previewTabs: {
    "storybook/docs/panel": {
      hidden: false,
    },
  },
  docs: {},
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
