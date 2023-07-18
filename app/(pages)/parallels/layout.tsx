type parallelsProps = {
    children: React.ReactNode,
    left: React.ReactNode,
    right: React.ReactNode
}

export default function Layout({
    children,
    left,
    right
}: parallelsProps) {
    return (
        <div>
            {children}

            <div className={'flex w-96 justify-between'}>
                {left}
                {right}
            </div>
        </div>
    )
}