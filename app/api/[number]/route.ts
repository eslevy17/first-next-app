import {NextResponse} from 'next/server'

type dynamicDataFetchingProps = {
    params: {
        number: number
    }
}

export async function GET(
    request: Request,
    {params}: dynamicDataFetchingProps
) {
    return NextResponse.json({
        number: params.number
    })
}