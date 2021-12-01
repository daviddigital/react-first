import React from 'react'
import CountButton from './CountButton'

const App = () => {
    return (
        <div> 
            <CountButton incrementBy={1} buttonColor={'blue'} />
            <CountButton incrementBy={5} buttonColor={'green'}/>
        </div>
    )
}

export default App