import ReactDOM from "react-dom";
import { CurrencyContextProvider } from "./Store/currency-context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store/index'
import "./index.css";
import App from "./App";
ReactDOM.render(
  <Provider store={store}>
    <CurrencyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrencyContextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
