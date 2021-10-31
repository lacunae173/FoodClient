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

const handleResponse = async (response) => {
    // let text
    try {
       let text = await response.text();
       if (response.ok) {
           return JSON.parse(text);
       } else {
           throw new Error(text)
       }
       
    } catch (err) {
        return Promise.reject(err.message)
    }
    // return response.json()
    //     .then(data => {
    //         if (!response.ok) {
    //             if (response.status === 400) {
    //                 return Promise.reject(data);
    //             }
    //             const error = (data && data.message) || response.statusText;
    //             return Promise.reject(error);
    //         }
    //         return data;
    //     });
}