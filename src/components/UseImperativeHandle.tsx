import React, { useRef, useState } from "react"
import { useImperativeHandle } from "react"


const Child = React.forwardRef((props, ref) => {
    const [message, setMessage] = useState<string|null>(null)

    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date()
            const message = `Hello, it's ${date.toLocaleString()} now`
            setMessage(message)
        }
    }))

    return <div>{message != null ? <p>{message}</p> : null }</div>
})

const Parent_UseImperativeHandle = () => {
    const childRef = useRef<{ showMessage: () => void}>(null)
    const onClick = () => {
        if (childRef.current !== null)
            childRef.current.showMessage()
    }

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef} />
        </div>
    )
}

export default Parent_UseImperativeHandle;