import { useState } from "react"

type CounterProps = {
    initalValue: number
}

const Counter = (props: CounterProps) => {
    const { initalValue } = props

    const [count, setCount] = useState(initalValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>-</button>
        </div>
    )
}

export default Counter