type dynamicPageNumberProps = {
    params: {
        number: number
    }
}

export default function Page({ params }: dynamicPageNumberProps) {
    return (
        <div>
            Dynamic page #{params.number}
        </div>
    )
}