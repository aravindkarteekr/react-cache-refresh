import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CacheBuster } from "react-cache-refresh";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CacheBuster
      currentAppVersion="1.0.1"
      loadingComponent={<div>Loading...</div>}
      hideConsoleLogs
      metaJsonPath="/custom/custom-meta.json"
    >
      <App />
    </CacheBuster>
  </StrictMode>,
);
