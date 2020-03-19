import * as React from "react";
import { render } from "react-dom";
import App from './App'
require("./App.scss");

render(<App />, document.getElementById("root") as HTMLElement);