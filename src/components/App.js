import React, { useEffect, useState } from 'react'
// import CountButton from './CountButton/CountButton'
// import SearchBar from './SearchBar/SearchBar'
// import Button from './Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from './StockRow/StockRow'

const App = () => {
    return (
        
        <div className = "App"> 
            <div className="container"> 
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Ticker </th>
                            <th>Name </th>
                            <th>Price </th>
                            <th>Updated </th>
                        </tr>
                    </thead> 
                    <tbody>
                        <StockRow ticker="goog" />
                        <StockRow ticker="msft" />
                        <StockRow ticker="tsla" />
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default App