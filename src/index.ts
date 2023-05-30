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

const fishes = await fetch(
    "http://localhost:5001/gofish?apikey=abrradiology"
).then((response) => response.json());

store.addFishes(fishes);

export const router = await initRouter(
    document.getElementById("router-outlet") ?? document.createElement("div")
);

store.route.setRoute(router.location.pathname);
