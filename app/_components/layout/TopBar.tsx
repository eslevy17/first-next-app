'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

const topBarCSS: string = `
    col-span-12
    p-2
    border-b
    border-sky-900
    flex
    justify-between
    sticky
    top-0
    z-10
    backdrop-blur
    bg-slate-900/50
`;

const topBarTitleCSS = `
    text-xl
    font-extrabold
    text-gray-300
    ml-2
`

const topBarMenuItemsCSS = `
    flex
    gap-4
    items-center
    mr-2
`

const topBarMenuItems: {
    text: string,
    href: string
}[] = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Docs',
        href: '/docs'
    },
    {
        text: 'Tests',
        href: '/tests'
    },
]

export function TopBar() {
    const pathname = usePathname()

    return (
        <div className={topBarCSS}>
            <h1 className={topBarTitleCSS}>First Next Project</h1>
            <div className={topBarMenuItemsCSS}>
                {topBarMenuItems.map(item => {
                    let navItemCSS = 'text-gray-400 font-extrabold'

                    const isSelected = item.href === '/' + pathname.split('/')[1]

                    if (isSelected) {
                        navItemCSS += ' !text-sky-500'
                    }

                    return (
                        <Link
                            key={item.text}
                            href={item.href}
                            className={navItemCSS}
                        >
                            {item.text}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}