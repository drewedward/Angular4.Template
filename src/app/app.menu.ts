import { MenuItem } from "primeng/primeng";

// TODO: Add logic to generate initial Menu Items based on routes in a specified Routing Module
export let initialMenuItems: Array<MenuItem> = [
    {
        label: 'Dropdown',
        icon: 'fa-cloud',
        items: [{
            label: 'New',
            icon: 'fa-plus',
            items: [
                { label: 'Project' },
                { label: 'Other' },
            ]
        },
        { label: 'Not Found', icon: 'fa-ban', routerLink: '/not-found' },
        { label: 'Invalid Route', routerLink: '/invalid' }
        ]
    },
    {
        label: 'Resource One',
        icon: 'fa-cloud',
        routerLink: '/resource-one'
    }
];