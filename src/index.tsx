import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { GlobalStyle } from "./components/App/styles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
