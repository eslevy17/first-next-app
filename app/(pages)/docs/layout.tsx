import {SideBar} from "@/app/_components/layout/SideBar";
import {navItems} from './navItems'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={'grid grid-cols-12'}>
            <SideBar navItems={navItems}/>
            <div className={'col-span-10'}>
                {children}
            </div>
        </div>
    )
}
