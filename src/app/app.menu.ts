import { MenuItem } from "primeng/primeng";

// TODO: Add logic to generate initial Menu Items based on routes in a specified Routing Module
export let initialMenuItems: Array<MenuItem> = [
    {
        label: 'Resource',
        items: [{
            label: 'New',
            icon: 'fa-plus',
            items: [
                { label: 'Project', routerLink: '/dashboard' },
                { label: 'Other',  routerLink: '/not-found' },
            ]
        },
        { label: 'Search', icon: 'fa-search' },
        { label: 'Quit' }
        ]
    },
    {
        label: 'Edit',
        icon: 'fa-edit',
        routerLink: '/dashboard'
    }
];