import Link from "next/link";

const navBarCSS: string = `
    flex-col
    justify-center
`;

const navItemCSS: string = `
    hover:brightness-125
    first:rounded-t-2xl
    last:rounded-b-2xl
`;

const navItemHrefCSS: string = `
    text-gray-500
    inline-block
    p-4
`;

export function NavBar() {
    type navItem = {
        text: string
        link: string
        subItems?: navItem[]
    }

    const navItems: navItem[] = [
        {
            text: 'Start',
            link: '/start'
        },
        {
            text: 'First',
            link: '/first'
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
            {navItems.map((navItem, idx) => (
                <div key={idx + navItem.text} className={navItemCSS}>
                    <Link href={navItem.link} className={navItemHrefCSS}>
                        {navItem.text}
                    </Link>
                </div>
            ))}
        </div>
    )
}