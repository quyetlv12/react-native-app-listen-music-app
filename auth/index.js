import axios from 'axios'
export const httpClient = axios.create({
    baseURL : 'https://622f17203ff58f023c1586c6.mockapi.io/',
    headers: {
        "Content-Type": "application/json",
      }
})