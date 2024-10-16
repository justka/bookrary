import ReactDOM from "react-dom/client";
import "styles/reset.css";
import { App } from "components/App/App";
import { Providers } from "components/Providers/Providers";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Providers>
      <App />
    </Providers>
  );
}
