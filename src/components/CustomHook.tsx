import React, { useCallback, useDebugValue, useState } from "react"

const useInput = () => {
    const [state, setState] = useState('');
    const onChage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    useDebugValue(`Input: ${state}`)

    return [state, onChage] as const
}

const Input = () => {
    const [text, onChangeText] = useInput()
    return (
        <div>
            <input type="text" onChange={onChangeText} />
            <p>Input: {text}</p>
        </div>
    )
}

export default Input