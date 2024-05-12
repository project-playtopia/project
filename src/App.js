import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router.js";
import { ThemeProvider } from "styled-components";
import theme from "./global/theme.js";
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension'
import themepark from "./modules/themepark.js";
import GlobalStyle from "./global/global.js";
import { UserProvider } from "./pages/myPage/UserContext.js";

const store = createStore(themepark , devToolsEnhancer())


function App() {
  return (
    <>
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <UserProvider>
            <RouterProvider router={router} />
            <GlobalStyle/>
          </UserProvider>
        </ThemeProvider>
      </Provider>
   
    </>
  );
}

export default App;
