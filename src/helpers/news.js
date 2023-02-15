import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.apilayer.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'apikey': 'm3MBi8737kzlM9Q9KXkOphNNKbEcA4IK'
  }
})
export default {
  news: () => instance({
    method: 'get',
    url: '/financelayer/news',
    params: {
      date: "thismonth",
      fallback: "off",
      sort: "desc",
      limit: 10,
      sources: "-bloomberg.com",
      tags: "-Healthcare",
      keywords: "Crypto, Stock",
      tickers: "-sva"
    }
  }),

}
