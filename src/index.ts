import "./components/win";
import "./components/lose";
import "./components/tie";
import "./components/title";
import "./components/button";
import "./components/rock";
import "./components/paper";
import "./components/scissors";
import "./components/score";

import { state } from "./state";
import { initRouter } from "./router";

function main() {
    const root = document.querySelector(".root");
    initRouter(root);
    state.init();
}
main();