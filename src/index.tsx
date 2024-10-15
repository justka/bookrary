import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { App } from "components/App/App";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
