import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH Token for instance';
instance.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    }, error => {
        return Promise.reject(error);
    }
);

export default instance;