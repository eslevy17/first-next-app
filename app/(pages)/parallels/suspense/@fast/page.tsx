export default async function Page() {
    await new Promise(r => setTimeout(r, 3000))

    return (
        <div>
            <p>Done</p>
        </div>
    )
}