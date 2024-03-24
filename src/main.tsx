import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/js/dist/popover.js";

const homepage = window.location.origin + "/revision-sheets/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <App homepage={homepage} />
    </div>
  </React.StrictMode>
);
