import { render } from "preact";
import { App } from "./App";
import "normalize.css/normalize.css";
import "./styles/global.scss";

render(<App />, document.getElementById("app"));
