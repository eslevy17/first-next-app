const topBarCSS: string = `
    col-span-12
    p-2
    border-b
    border-sky-900
    flex
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

export function TopBar() {
    return (
        <div className={topBarCSS}>
            <h1 className={topBarTitleCSS}>First Next Project</h1>
        </div>
    )
}