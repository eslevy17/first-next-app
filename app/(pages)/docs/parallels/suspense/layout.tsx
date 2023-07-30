'use client'
import {Suspense, useEffect, useState} from "react";

type parallelsPropsWithSuspense = {
    children: React.ReactNode,
    fast: React.ReactNode,
    slow: React.ReactNode
}

export default function Layout({
    children,
    fast,
    slow
}: parallelsPropsWithSuspense) {

    const [ countdown, setCountdown ] = useState<number>(5)

    useEffect(() => {
        const timeout = setInterval(() => {
            if (countdown < 1) {
                clearInterval(timeout)
                return
            }

            setCountdown(countdown => countdown - 1)
        }, 1000)

        return () => clearInterval(timeout);
    }, [countdown])

    return (
        <div>
            {children}

            <div className={'flex w-96 justify-between'}>
                <Suspense fallback={<p>loading in {countdown - 2}...</p>}>
                    {fast}
                </Suspense>
                <Suspense fallback={<p>loading in {countdown}...</p>}>
                    {slow}
                </Suspense>
            </div>
        </div>
    )
}