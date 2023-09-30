import axios from 'axios';


const service =  axios.create({
    baseURL: 'https://localhost:3400/'
});

export default service;