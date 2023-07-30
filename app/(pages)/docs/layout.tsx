import {SideBar} from "@/app/(pages)/docs/SideBar";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={'grid grid-cols-12'}>
            <SideBar/>
            <div className={'col-span-10'}>
                {children}
            </div>
        </div>
    )
}
