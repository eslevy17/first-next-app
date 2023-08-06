'use client'

import {useState} from "react";

export default function Page() {
    const [ count, setCount ] = useState<number>(0)

    const buttonCSS = `
        px-2
        text-sky-400
        bg-sky-400/10
        rounded-full
        hover:bg-sky-400/20
    `

    const buttonColumn = `
        w-6
        gap-2
        flex
        flex-col
        items-center
    `

    return (
        <div>
            <p>Testing Button Clicks</p>
            <br />

            <div className={buttonColumn}>
                <button
                    onClick={() => setCount(count => count + 1)}
                    className={buttonCSS}
                >
                    +
                </button>

                <p title={'count'}>{count}</p>

                <button
                    onClick={() => setCount(count => count - 1)}
                    className={buttonCSS}
                >
                    -
                </button>
            </div>
        </div>
    )
}