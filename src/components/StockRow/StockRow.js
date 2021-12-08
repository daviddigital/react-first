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
        // query the API
        const api_token = 'X3ZH5F4C7ZCUID7K'
        const base_url = 'https://www.alphavantage.co/query?'
    
        const url = `${base_url}function=TIME_SERIES_DAILY&symbol=${this.props.ticker}&apikey=${api_token}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                data: data[data.length - 1]
            }) 
        })

       
    }

    render(){

    return (
    <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.price}</td>
        <td>{this.state.data.date}</td>
      </tr>
    )
}
}
export default StockRow