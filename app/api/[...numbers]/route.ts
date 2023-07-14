import {NextResponse} from 'next/server'

type dynamicDataFetchingMultipleProps = {
    params: {
        numbers: number[]
    }
}

export async function GET(
    request: Request,
    {params}: dynamicDataFetchingMultipleProps
) {
    return NextResponse.json({
        numbers: params.numbers
    })
}