import React, { useState, useEffect } from 'react'
import './CountButton.css'

const CountButton = (props) => {
    console.log(props)
    const [currentCount, setCurrentCount] = useState(0)


    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const buttonStyles = {
        background: props.buttonColor,
        borderRadius: props.borderRadius
    }


    useEffect(() => {
        console.log("Use Effect func called")
        if (currentCount > 10) {
            setCurrentCount(0)
        }
    }, [currentCount])


    return (
    <div>
        <button onClick={handleClick}>+{props.incrementBy}</button>
        <div className={"count-display"}>{currentCount}</div>
    </div>
    )
}

export default CountButton