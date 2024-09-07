import React from "react";
import ReactDOM from "react-dom/client";
import "styles/reset.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <p>Hello, Bookrary!</p>
    </React.StrictMode>
  );
}
