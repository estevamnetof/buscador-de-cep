import axios from 'axios';

// https://viacep.com.br/ws/22430041/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});


export default api;