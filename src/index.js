import React from 'react'
import ReactDOM from 'react-dom'

const reactContentRoot = document.getElementById("root")

const App = () => {
    const myItem = 'item'

    return (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
    )
}

ReactDOM.render(<App />, reactContentRoot)