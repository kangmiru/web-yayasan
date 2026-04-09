'use client'

import React, { JSX, useEffect, useRef, useState } from "react"

interface FormattedTextProps {
    text: string
}

interface AnimatedNumberProps {
    value: number
}

export function FormattedText({text}:FormattedTextProps) : React.ReactNode{
    const lines = text.split('\n').map(line => line.trim());
    const elements: JSX.Element[] = []
    let currentList: string[] = []

    lines.forEach((line, index) => {
        if(line.startsWith('- ')) {
            currentList.push(line.replace('- ', ''))
        } else {
            if (currentList.length > 0) {
                elements.push(
                    <ul key={`ul-${index}`} className="list-disc pl-8 mb-4 space-y-1">
                        {currentList.map((item, i) => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )
                currentList = []
            }

            if (line !== '') {
                elements.push(
                    <p key={`p${index}`} className="indent-8 mb-4">
                        {line}
                    </p>
                )
            }
        }
    })

    if (currentList.length > 0) {
        elements.push(
            <ul key={'ul-last'} className="list-disc pl-8 mb-4 space-y-1">
                {currentList.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }
    return elements
}

export function AnimatedNumber({value}:AnimatedNumberProps){
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const ref = useRef<HTMLSpanElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true)
                    observer.disconnect()
                }
            },
            {threshold: 0.5}
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    },[])

    useEffect(() => {
        if(!start) return

        let startValue = 0
        const duration = 1000
        let startTime: number | null = null

        const animated = (time:number)=>{
            if(!startTime) startTime = time
            const progress = time - startTime

            const percent = Math.min(progress / duration, 1)
            setCount(Math.floor(percent * value))

            if (percent < 1) {
                requestAnimationFrame(animated)
            }
        }

        requestAnimationFrame(animated)
    }, [start, value])

    return <span ref={ref}>{count}</span>
}