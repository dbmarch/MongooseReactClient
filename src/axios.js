import axios from 'axios';


// Todo - Update to https with authentication.

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.get['Accept'] = 'application/json';
// instance.defaults.headers.common['Authorization'] = 'ALTERNATE AUTH TOKEN';

export default instance;