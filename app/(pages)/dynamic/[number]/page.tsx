type dynamicPageNumberProps = {
    params: {
        number: number
    }
}

export default function Page({ params }: dynamicPageNumberProps) {
    return (
        <div>
            <p>Dynamic page #{params.number}</p>
            <br />
            <p className={'text-gray-600'}>Change the URL to see the result</p>
        </div>
    )
}