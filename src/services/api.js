import axios from "axios";

// URL DA API: /movie/now_playing?api_key=75f8455e56167be1fcf16a20127166f4&language=pt-BR

//BASE  https://api.themoviedb.org/3

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});


export default api;