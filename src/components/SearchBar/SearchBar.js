import React, { useState } from 'react'
import './SearchBar.css'

const tickers = [
    'AAPL',
    'FB',
    'MSFT',
    'NET',
    'GOOG',
    'AAN'
]

const SearchBar = () => { 

    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    console.log(tickers.filter((ticker) => {
        return ticker.includes(searchValue)
    })
    )

    const filteredTickers = tickers.filter((ticker) => {
        return ticker.includes(searchValue)
    })


    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            
            {searchValue && <button onClick={handleClearClick}>Clear </button>}
            
            <ul>
            {filteredTickers.map((ticker) => {
                return <li key={ticker}>{ticker}</li>
            })}
            </ul>
        </div>
    )
}

export default SearchBar 