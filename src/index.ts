import { initRouter } from "./router";

import { Store } from "./store/store";

import "./components/nav-bar";
import "./components/home";
import "./components/region";

export const store = Store.create({
    fishes: [],
    route: {
        name: "km-home",
        parameter: null,
    },
});

fetch("http://localhost:5001/gofish?apikey=abrradiology")
    .then((response) => response.json())
    .then(fishes => store.addFishes(fishes));

initRouter(document.getElementById("router-outlet") ?? document.createElement("div"))
    .then(router => store.route.setRoute(router.location.pathname));
