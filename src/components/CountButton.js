import React, { useState } from 'react'

const CountButton = (props) => {
    console.log(props)
    const [currentCount, setCurrentCount] = useState(0)


    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    return (
    <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div>{currentCount}</div>
    </div>
    )
}

export default CountButton