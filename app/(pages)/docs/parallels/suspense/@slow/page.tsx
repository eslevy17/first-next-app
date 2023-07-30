export default async function Page() {
    await new Promise(r => setTimeout(r, 5000))

    return (
        <div>
            <p>Done</p>
        </div>
    )
}