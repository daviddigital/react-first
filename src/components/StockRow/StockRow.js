import React, { useState, Component } from 'react'
// import { alpha } from '../config/alpha'
class StockRow extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        // query the API, test details below
        const api_token = 'X3ZH5F4C7ZCUID7K'
        const base_url = 'https://www.alphavantage.co/query?'
    
        const url = `${base_url}function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&apikey=${api_token}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                data: data["Time Series (Daily)"]
            }) 
        })

       
    }

    render(){

    return (
    <tr>
        {console.log(this.state.data)}
        {/* <td>{this.props.ticker}</td>
        <td>{this.state.data["4. close"]}</td> 
        <td>{this.state.data}</td> */}

        <td>{this.props.ticker}</td>
        <td>$100</td> 
        <td>12/01/2021</td>
      </tr>
    )
}
}
export default StockRow

