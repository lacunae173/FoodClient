import { apiUrl } from "./config";

export const getAllOrders = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token.access
        },
    }
    return fetch(`${apiUrl}/orders/`, requestOptions).then(response => response.text()
        .then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        }))
}