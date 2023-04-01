import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const getCabList = (data) => api.post('/api/cab-list', data);
export const bookCab = (data) => api.post('/api/book-cab', data);

export default api;