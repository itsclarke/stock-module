import React, { Component } from 'react'
import { formatTime } from '../utils'
import dataList from '../stocks'
import '../styles.css'

class App extends Component {
    state = {
        symbol: '',
        stock: {
            Name: 'Stock Name'
        },
        stocks: [],
        error: false
    }

    componentDidMount() {
        this.setState({ stocks: Object.values(dataList) }, function() {
            let stock = this.state.stocks.find(item => {
                return item.Symbol === 'MSFT'
            })
            this.setState({ stock })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.stock.Name}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Range</td>
                            <td>{this.state.stock.Low} - {this.state.stock.High}</td>
                        </tr>
                        <tr>
                            <td>Open</td>
                            <td>{this.state.stock.Open}</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td>{this.state.stock.Volume}</td>
                        </tr>
                        <tr>
                            <td>Market cap</td>
                            <td>{this.state.stock.MarketCap}</td>
                        </tr>
                        <tr>
                            <td>{this.state.stock.Timestamp}</td>
                        </tr>
                    </tbody>
                </table>
                <div id="error" className={(this.state.error) ? "visible" : "hidden"}>Please enter a valid symbol</div>
                <form onSubmit={e => this._submit(e)}>
                    <input onChange={e => this._handleChange(e)}
                        type="text" placeholder="AAPL, MSFT, etc." />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    _handleChange = e => {
        let symbol = e.target.value.toUpperCase()
        this.setState({ symbol })
    }

    _submit = e => {
        e.preventDefault()
        let stock = this.state.stocks.find(item => {
            return item.Symbol === this.state.symbol
        })

        if (this.state.stocks.indexOf(stock) > -1) {
            this.setState({ stock, error: false, symbol: '' })
            e.target.reset()
        } else {
            this.setState({ error: true })
        }
    }
}

export default App