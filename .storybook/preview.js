// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { withThemeFromJSXProvider } from "@storybook/addon-themes";
// import { lightTheme, darkTheme } from "../src/themes.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

/* TODO: update import for your custom Material UI themes */
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // decorators: [
  //   withThemeFromJSXProvider({
  //     GlobalStyles: CssBaseline,
  //     Provider: ThemeProvider,
  //     themes: {
  //       // Provide your custom themes here
  //       light: lightTheme,
  //       dark: darkTheme,
  //     },
  //     defaultTheme: "light",
  //   }),
  // ],
};

export default preview;
