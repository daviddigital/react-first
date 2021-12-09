import React, { useEffect, useState } from 'react'
// import CountButton from './CountButton/CountButton'
// import SearchBar from './SearchBar/SearchBar'
// import Button from './Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import StockRow from './StockRow/StockRow'

const App = () => {
    const [formData, setFormData] = useState("")
    const [tickers, setTickers] = useState([])
    const queryAPI = (e) => {
        e.preventDefault()
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${formData}&apikey=demo`)
            .then(something => something.json())
            .then(json => {
                let obj = {
                    name: formData,
                    price: json["Time Series (Daily)"]["2021-12-06"]["4. close"],
                    date: "2021-12-06"
                }
                setFormData("")
                setTickers([...tickers, obj])
            })
    }

    return (
    <   div className = "App"> 
        <form onSubmit={queryAPI}>
            <fieldset>
                <label>Ticker</label>
                <input value={formData} onChange={e => setFormData(e.target.value)} />
            </fieldset>
            <button>Search</button>
        </form>
            <div className="container"> 
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Ticker </th>
                            <th>Price </th>
                            <th>Updated </th>
                        </tr>
                    </thead> 
                    <tbody id="table">
                        {tickers && tickers.map(ticker => (
                            <tr>
                                <td>{ticker.name}</td>
                                <td>{ticker.price}</td>
                                <td>{ticker.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
        
        )
    }
    
    // <StockRow ticker="goog" />
    // <StockRow ticker="msft" />
    // <StockRow ticker="tsla" />
export default App