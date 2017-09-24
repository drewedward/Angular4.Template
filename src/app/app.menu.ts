import { MenuItem } from "../framework/services/menu.service";

// TODO: Add logic to generate initial Menu Items based on routes in a specified Routing Module
export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Route #1',
        icon: 'fa fa-clock-o',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Route #2',
        icon: 'fa fa-cube',
        route: '/not-found',
        submenu: null,
    },
    {
        text: 'Route #3',
        icon: 'fa fa-cubes',
        route: '/invalid-route',
        submenu: null
    }
]