import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css"

let root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)