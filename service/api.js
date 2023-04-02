import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const getCabList = (data) => api.post('/api/cab-list', data);
export const bookCab = (data) => api.post('/api/book-cab', data);
export const getAllBookings = (data) => api.post('/api/get-all-bookings', data);

export default api;