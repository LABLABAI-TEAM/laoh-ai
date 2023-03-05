import "@/styles/globals.css";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
// import chakraTheme from "@chakra-ui/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    // Button,
  },
});
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css"; 

import createEmotionCache from "../utility/createEmotionCache";
import { lightThemeOptions } from "../styles/themes/lightThemeOptions";
import { store } from "@/services/app/rootReducer";
import persistStore from "redux-persist/lib/persistStore";
import { SessionOptions } from "next-auth";
import {
  SessionContextValue,
  SessionProvider,
  SessionProviderProps,
} from "next-auth/react";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

let persistor = persistStore(store);

const App: React.FunctionComponent<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          {/* <ChakraBaseProvider theme={theme}> */}
          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            <Component {...pageProps} />
            {/* </PersistGate> */}
          </Provider>
          {/* </ChakraBaseProvider> */}
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};

export default App;
