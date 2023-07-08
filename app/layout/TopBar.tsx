const topBarCSS: string = `
    col-span-12
    p-2
    border-b
    flex
    justify-center
`;

export function TopBar() {
    return (
        <div className={topBarCSS}>
            <p>First Next Project</p>
        </div>
    )
}