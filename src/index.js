import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { rootReducer } from "./redux/rootReducer";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const app = (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
