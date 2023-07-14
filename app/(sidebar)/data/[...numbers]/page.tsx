type dynamicDataFetchingProps = {
    params: {
        numbers: number[]
    }
}

async function getData(nums: number[]) {
    return (await fetch(`http://localhost:3000/api/${nums.join('/')}`)).json()
}

export default async function Page({ params }: dynamicDataFetchingProps) {
    const data = await getData(params.numbers);

    return (
        <div>
            <p>Numbers from URL params: {params.numbers.join(', ')}</p>
            <p>Number from the API: {data.numbers.join(', ')}</p>
            <br />
            <p className={'text-gray-600'}>...add more to the URL see them show up.</p>
        </div>
    )
}