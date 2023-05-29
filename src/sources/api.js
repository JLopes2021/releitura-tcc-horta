import axios from "axios";

const api = axios.create({

    // api json https://viacep.com.br/ws/02610010/json/
    baseURL: " https://viacep.com.br/ws/"
})

export default api;