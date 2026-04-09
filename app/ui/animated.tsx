'use client'

import React, { JSX, useEffect, useState } from "react"

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

    useEffect(() => {
        let start = 0
        const duration = 1000
        const increment = value / (duration / 16)

        const counter = setInterval(() => {
            start += increment
            if (start >= value) {
                setCount(value)
                clearInterval(counter)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(counter)
    }, [value])

    return <span>{count}</span>
}