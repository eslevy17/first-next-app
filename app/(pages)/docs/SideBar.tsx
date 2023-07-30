'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const navBarCSS: string = `
    flex-col
    col-span-2
    justify-center
    pl-2
`;

const navItemsCSS: string = `
    pl-2
`;

const navItemCSS: string = `
    first:rounded-t-2xl
    last:rounded-b-2xl
`;

const navItemHrefCSS: string = `
    hover:!text-sky-500
    text-gray-500
    inline-block
    py-1
`;

type navItem = {
    text: string
    link: string
    subItems?: navItem[]
}

export function SideBar() {

    const navItems: navItem[] = [
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

    const pathname = usePathname()

    return (
        <div className={navBarCSS}>
            {RenderNavItems(navItems, pathname)}
        </div>
    )
}

function RenderNavItems(
    navItems?: navItem[],
    pathname?: string,
    level: number=1,
) {
    if (!navItems?.length) return null

    return (
        <ul className={navItemsCSS}>
            {navItems.map((navItem, idx) => {
                const isSelected = navItem.link === pathname

                // might be used later
                // const isParentSelected = !isSelected && navItem.link.replace('/', '') === pathname?.split('/')[1]

                let extraCSS = ''

                // text highlight
                if (isSelected) {
                    extraCSS += ' !text-sky-500'
                }

                if (level === 1) {
                    extraCSS += ' font-extrabold !text-gray-400'
                }

                // border-l highlight
                if (level > 1) {
                    extraCSS += ' pl-2 border-l border-gray-800'

                    if (isSelected) {
                        extraCSS += ' border-sky-500'
                    }
                }

                return (
                    <li key={idx + navItem.text} className={navItemCSS}>
                        <Link
                            href={navItem.link}
                            className={navItemHrefCSS + extraCSS}
                        >
                            {navItem.text}
                        </Link>
                        {RenderNavItems(navItem.subItems, pathname, level + 1)}
                    </li>
                )
            })}
        </ul>
    )
}