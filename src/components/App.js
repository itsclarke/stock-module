import React, { Component } from 'react'
import { formatTime, formatNumber } from '../utils'
import dataList from '../stocks'
import '../../node_modules/material-dashboard/assets/css/material-dashboard.min.css'
import '../styles.css'

class App extends Component {
    state = {
        symbol: '',
        stock: {
            Name: 'Stock Name',
            Open: 0,
            Volume: 0,
            MarketCap: 0,
            Low: 0,
            High: 0
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
            <div className="app">
                <h1>{this.state.stock.Name}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Range</td>
                            <td className="text-right">{this._getRange()}</td>
                        </tr>
                        <tr>
                            <td>Open</td>
                            <td className="text-right">{this.state.stock.Open.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td className="text-right">{formatNumber(this.state.stock.Volume)}</td>
                        </tr>
                        <tr>
                            <td>Market cap</td>
                            <td className="text-right">{formatNumber(this.state.stock.MarketCap)}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="text-right">{formatTime(this.state.stock.Timestamp)}</td>
                        </tr>
                    </tbody>
                </table>
                <div id="error" className={(this.state.error) ? "visible" : "hidden"}>Please enter a valid symbol</div>
                <form className="flex" onSubmit={e => this._submit(e)}>
                    <input onChange={e => this._handleChange(e)} type="text"  placeholder="AAPL, MSFT, etc." />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }

    _getRange = () => {
        return this.state.stock.Low.toFixed(2) + ' - ' + this.state.stock.High.toFixed(2)
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