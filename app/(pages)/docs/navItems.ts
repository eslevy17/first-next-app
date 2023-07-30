import {navItem} from "@/app/_components/layout/SideBar";

export const navItems: navItem[] = [
    {
        text: 'Docs Home',
        link: '/docs'
    },
    {
        text: 'Static Pages',
        link: '/docs/static',
        subItems: [
            {
                text: 'Static subpage 1',
                link: '/docs/static/subpage1'
            },
            {
                text: 'Static subpage 2',
                link: '/docs/static/subpage2'
            },
        ]
    },
    {
        text: 'Dynamic Pages',
        link: '/docs/dynamic',
        subItems: [1,2,3].map(num => (
            {
                text: `Dynamic subpage ${num}`,
                link: `/docs/dynamic/${num}`
            }
        ))
    },
    {
        text: 'Catch-all Params Pages',
        link: '/docs/catch-all',
        subItems: [
            {title: 'Single', params: ['param1']},
            {title: 'Double', params: ['param1', 'param2']},
            {title: 'Triple', params: ['param1', 'param2', 'param3']},
        ].map(obj => (
            {
                text: `Dynamic catch-all (${obj.title})`,
                link: `/docs/catch-all/${obj.params.join('/')}`
            }
        ))
    },
    {
        text: 'Data Fetching',
        link: '/docs/data',
        subItems: [
            {
                text: 'Simple string fetching',
                link: '/docs/data/string'
            },
            {
                text: 'JSON data fetching',
                link: '/docs/data/json'
            },
            {
                text: 'Fetch with param',
                link: '/docs/data/12'
            },
            {
                text: 'Fetch with params',
                link: '/docs/data/12/13/14/15'
            },
        ]
    },
    {
        text: 'Parallel Routes',
        link: '/docs/parallels',
        subItems: [
            {
                text: 'Instant loading',
                link: '/docs/parallels/instant'
            },
            {
                text: 'Suspenseful loading',
                link: '/docs/parallels/suspense'
            },
        ]
    }
]
