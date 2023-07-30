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

export type navItem = {
    text: string
    link: string
    subItems?: navItem[]
}

type SideBarProps = {
    navItems: navItem[]
}

export function SideBar({navItems}: SideBarProps) {
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