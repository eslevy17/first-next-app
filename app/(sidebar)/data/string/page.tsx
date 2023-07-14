async function getData() {
    return (await fetch('http://localhost:3000/api/string')).text()
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}