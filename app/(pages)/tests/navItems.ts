import {navItem} from "@/app/_components/layout/SideBar";

export const navItems: navItem[] = [
    {
        text: 'Tests Home',
        link: '/tests'
    },
    {
        text: 'Forms',
        link: '/tests/forms',
        subItems: [
            {
                text: 'Basic form',
                link: '/tests/forms/basic'
            },
        ]
    },
]
