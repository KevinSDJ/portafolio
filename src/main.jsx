import React from "react";
import {createRoot} from "react-dom/client";
import "normalize.css";
import App from "./App";


let container = document.getElementById('root')
let root = createRoot(container)

root.render(<App/>)
  

