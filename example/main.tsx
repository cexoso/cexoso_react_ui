import {render} from "react-dom"
import * as React from "react";
import App from "./app"
const container = document.createElement("div");
const body = document.getElementsByTagName("body")[0]
render(<App />,container)
body.appendChild(container);