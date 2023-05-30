import { Router } from "@vaadin/router";

const router = new Router();
export async function initRouter(outlet: Node): Promise<Router> {
    if (router.getOutlet()) {
        return router;
    }

    router.setOutlet(outlet);

    router.setRoutes([
        {
            path: '/',
            component: 'km-home',
        },
        {
            path: '/home',
            component: 'km-home',
        },
        {
            path: '/region/:id',
            component: 'km-region',
        },
    ]);

    await router.ready;
    return router;
}