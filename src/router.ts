import { play } from "./pages/play";
import { rules } from "./pages/rules";
import { win } from "./pages/win";
import { lose } from "./pages/lose";
import { tie } from "./pages/tie";
import { welcome } from "./pages/welcome";

const BASE_PATH = "/desafio-m5";

const routes = [{
    path: /\/welcome/,
    component: welcome
},
{
    path: /\/rules/,
    component: rules
},
{
    path: /\/play/,
    component: play
},
{
    path: /\/win/,
    component: win
},
{
    path: /\/lose/,
    component: lose
},
{
    path: /\/tie/,
    component: tie
}]

function githubPages() {
    return location.host.includes("github.io");
}

export function initRouter(container: any) {
    function goTo(path) {

        const completePath = githubPages() ? BASE_PATH + path : path;

        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = githubPages() ? route.replace(BASE_PATH, "") : route;


        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const el: any = r.component({ goTo: goTo });
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el);
            }
        }

    }
    if (location.host.includes("github.io")) {
        goTo("/welcome");
    } else if (location.pathname == "/") {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname)
    }
    window.onpopstate = function () {
        handleRoute(location.pathname);
    }
}