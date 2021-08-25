import { create } from "@storybook/theming";
// Storybook 테마 변경

export default create({
    base: "light",
    colorSecondary: "#E74C3C",

    // UI
    appBg: "white",
    appContentBg: "white",
    appBorderColor: "#8e8e8e",
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,1)",

    // Toolbar default and active colors
    barTextColor: "#ffffff",
    barSelectedColor: "rgba(255,255,255,0.7)",
    barBg: "#34495E",

    // Form colors
    inputBg: "white",
    inputBorder: "silver",
    inputTextColor: "black",
    inputBorderRadius: 4,

    // storybook BI 커스텀 변경
    // brandTitle: 'Project storybook',
    // brandUrl: 'https://example.com',
    // brandImage: 'https://place-hold.it/350x150',
});
