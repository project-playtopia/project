import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme";

import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension'
import themepark from "./modules/themepark";
import GlobalStyle from "./global/global";

const store = createStore(themepark , devToolsEnhancer())


function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>

    </>
  );
}

export default App;
