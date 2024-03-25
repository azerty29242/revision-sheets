import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/js/dist/popover.js";

interface Sheet {
  name: string,
  path: string
}

interface Folder {
  name: string,
  subfolders: Folder[],
  sheets: Sheet[]
}

const files: Folder = {
  name: "Fiches Bristol",
  subfolders: [
    {
      name: "Histoire",
      path: "histoire/"
    }
  ],
  sheets: []
}

const homepage = window.location.origin + "/revision-sheets/";

const search = window.location.search;
const params = new URLSearchParams(search);

let folder = params.get("folder");

if (folder !== null) folder = decodeURIComponent(folder);

let sheet = params.get("sheet");

if (sheet !== null) sheet = decodeURIComponent(sheet);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <App folder={folder} sheet={sheet} homepage={homepage} />
    </div>
  </React.StrictMode>
);
