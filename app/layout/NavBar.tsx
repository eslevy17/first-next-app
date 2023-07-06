import Link from "next/link";

const navBarCSS: string = `
    flex-col
    justify-center
`;

const navItemsCSS: string = `
    ml-2
`;

const navItemCSS: string = `
    hover:brightness-125
    first:rounded-t-2xl
    last:rounded-b-2xl
`;

const navItemHrefCSS: string = `
    text-gray-500
    inline-block
    py-1
`;

type navItem = {
    text: string
    link: string
    subItems?: navItem[]
}

export function NavBar() {

    const navItems: navItem[] = [
        {
            text: 'Start',
            link: '/start'
        },
        {
            text: 'First',
            link: '/first',
            subItems: [
                {
                    text: 'First subpage 1',
                    link: '/first/subpage1'
                },
                {
                    text: 'First subpage 2',
                    link: '/first/subpage2'
                },
            ]
        },
        {
            text: 'Second',
            link: '/second'
        },
        {
            text: 'Third',
            link: '/third'
        }
    ]

    return (
        <div className={navBarCSS}>
            {RenderNavItems(navItems)}
        </div>
    )
}

function RenderNavItems(navItems?: navItem[]) {
    if (!navItems?.length) return null

    return (
        <ul className={navItemsCSS}>
            {navItems.map((navItem, idx) => (
                <li key={idx + navItem.text} className={navItemCSS}>
                    <Link href={navItem.link} className={navItemHrefCSS}>
                        {navItem.text}
                    </Link>
                    {RenderNavItems(navItem.subItems)}
                </li>
            ))}
        </ul>
    )
}