const topBarCSS: string = `
    col-span-12
    p-2
    border-b
    flex
    justify-center
    sticky
    top-0
    z-10
    bg-slate-900
`;

export function TopBar() {
    return (
        <div className={topBarCSS}>
            <p>First Next Project</p>
        </div>
    )
}