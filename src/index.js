import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    }, error => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response => {
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    }
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
