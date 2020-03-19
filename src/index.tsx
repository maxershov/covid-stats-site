import * as React from "react";
import { render } from "react-dom";
import App from './App'
require("./App.scss");
// require("../node_modules/react-responsive-carousel/lib/styles/main.css")

render(<App />, document.getElementById("root") as HTMLElement);