import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import Editor from "./Editor.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/popover.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Editor /> */}
  </React.StrictMode>
);
