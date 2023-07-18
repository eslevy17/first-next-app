type dynamicDataFetchingProps = {
    params: {
        number: number
    }
}

async function getData(num: number) {
    return (await fetch(`http://localhost:3000/api/${num}`)).json()
}

export default async function Page({ params }: dynamicDataFetchingProps) {
    const data = await getData(params.number);

    return (
        <div>
            <p>Number from URL params: {params.number}</p>
            <p>Number from the API: {data.number}</p>
        </div>
    )
}