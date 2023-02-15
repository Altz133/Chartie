import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api2.binance.com',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',

  }
})
export default {
  //ticker price instance required for downloading prices
  tickerPrice: (symbols) => instance({
    method: 'get',
    url: '/api/v3/ticker/price',
    params: {
      symbols: JSON.stringify(symbols),
    },

  }),
  //serves data necessery for drawing main menu charts
  klines: (symbol, interval) => instance({
    method: 'get',
    url: '/api/v3/uiKlines',
    params: {
      symbol: symbol,
      interval: interval,
      limit: 150,
    }
  }),
}
