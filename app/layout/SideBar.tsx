'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const navBarCSS: string = `
    flex-col
    col-span-2
    justify-center
`;

const navItemsCSS: string = `
    pl-2
`;

const navItemCSS: string = `
    first:rounded-t-2xl
    last:rounded-b-2xl
`;

const navItemHrefCSS: string = `
    hover:text-gray-300
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
            text: 'Start',
            link: '/start'
        },
        {
            text: 'Static Pages',
            link: '/static',
            subItems: [
                {
                    text: 'Static subpage 1',
                    link: '/static/subpage1'
                },
                {
                    text: 'Static subpage 2',
                    link: '/static/subpage2'
                },
            ]
        },
        {
            text: 'Dynamic Pages',
            link: '/dynamic',
            subItems: [1,2,3].map(num => (
                {
                    text: `Dynamic subpage ${num}`,
                    link: `/dynamic/${num}`
                }
            ))
        },
        {
            text: 'Catch-all Params Pages',
            link: '/catch-all',
            subItems: [
                {title: 'Single', params: ['param1']},
                {title: 'Double', params: ['param1', 'param2']},
                {title: 'Triple', params: ['param1', 'param2', 'param3']},
            ].map(obj => (
                {
                    text: `Dynamic catch-all (${obj.title})`,
                    link: `/catch-all/${obj.params.join('/')}`
                }
            ))
        },
        {
            text: 'Data Fetching',
            link: '/data',
            subItems: []
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
                const isParentSelected = !isSelected && navItem.link.replace('/', '') === pathname?.split('/')[1]

                let extraCSS = ''

                // text highlight
                if (isParentSelected) {
                    extraCSS += ' !text-gray-400'
                }
                if (isSelected) {
                    extraCSS += ' !text-gray-300'
                }

                // border-l highlight
                if (level > 1) {
                    extraCSS += ' pl-2 border-l'

                    if (isSelected) {
                        extraCSS += ' border-gray-300'
                    }
                    else {
                        extraCSS += ' border-gray-700'
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