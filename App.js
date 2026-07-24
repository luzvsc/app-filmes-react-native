import { MD3DarkTheme, PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation/AppNavigator";

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#d3a95f",
    background: "#121212",
    surface: "#242424",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
