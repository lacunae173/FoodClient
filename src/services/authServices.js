import { apiUrl } from "./config";


const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

export const login = (data) => {
    requestOptions.body = JSON.stringify(data);
    return fetch(`${apiUrl}/users/login/`, requestOptions).then(handleResponse);
}

export const register = (data) => {
    requestOptions.body = JSON.stringify(data);
    return fetch(`${apiUrl}/users/register/`, requestOptions).then(handleResponse)
}

export const logout = (data) => {
    requestOptions.body = JSON.stringify(data);
    return fetch(`${apiUrl}/users/logout/`, requestOptions).then(handleResponse)
}

export const refresh = (data) => {
    requestOptions.body = JSON.stringify(data)
    return fetch(`${apiUrl}/users/login/refresh/`, requestOptions).then(handleResponse)
}

const handleResponse = (response) => {
    return response.text()
        .then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    //logout
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
}