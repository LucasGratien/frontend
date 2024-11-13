import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUsers = () => {
    return apiClient.get('/users');
};

export default apiClient;
