import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8000/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.get['Accept'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'ALTERNATE AUTH TOKEN';

export default instance;