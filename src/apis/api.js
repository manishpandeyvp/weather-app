import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0/forecast'
})
