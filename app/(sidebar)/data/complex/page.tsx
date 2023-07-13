async function getData() {
    return (await fetch('http://localhost:3000/api/complex')).json()
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <p>JSON item one: "{data.firstItem}"</p>
            <p>JSON item two: "{data.secondItem}"</p>
        </div>
    )
}