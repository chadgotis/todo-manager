import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./stores";
// import { createStore } from "redux";
// import allReducers from "./reducers";

// const store = createStore(
//   allReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
