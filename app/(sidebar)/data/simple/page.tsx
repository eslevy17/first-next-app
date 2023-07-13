async function getData() {
    return (await fetch('http://localhost:3000/api/simple')).text()
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}