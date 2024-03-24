import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/js/dist/popover.js";

const search = window.location.search;
const params = new URLSearchParams(search);

const folder = params.get("folder");

const sheet = params.get("sheet");

const homepage = window.location.origin + "/revision-sheets/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <App folder={folder} sheet={sheet} homepage={homepage} />
    </div>
  </React.StrictMode>
);
