type dynamicCatchAllProps = {
    params: {
        path: string[]
    }
}

export default function Page({ params }: dynamicCatchAllProps) {
    return (
        <div>
            <p>Dynamic URL params:</p>

            <ul className={'m-4'}>
                {params.path.map(string => <li key={string}>{string}</li>)}
            </ul>

            <p className={'text-gray-600'}>...add more to the URL see them show up.</p>
        </div>
    )
}