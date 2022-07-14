import axios from 'axios';
export const HTTP = axios.create({
    baseURL: 'https://api.binance.com',
    headers: {
        'apiKey': "Q8yHa6QKRgSKrpPZzfe6QQ5XaFAU7oRiahIlzXEQwCmx6MGa3r3ymEStNriCb4PQ",
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        Accept: 'application/json',
        'Content-Type': 'application/json'


    
    
}

});

